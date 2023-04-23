/**
 * wait(200).then(()=>console.log('hi!'));
 */
export const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
