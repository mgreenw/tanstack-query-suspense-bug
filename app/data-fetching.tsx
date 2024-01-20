// This file includes a very basic implementation of data fetching with React Suspense.
// Based on https://blog.logrocket.com/data-fetching-react-suspense/#wrappromise-js

export function wrapPromise<T>(promise: Promise<T>) {
  let status = "pending";
  let response: T | undefined = undefined;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
}

export function fetchData<T = any>(url: string) {
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res as T);

  return wrapPromise(promise);
}
