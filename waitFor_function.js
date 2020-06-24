/*
When testing in the browser with mocha, etc, you may find that a test runs before the DOM element it is testing has loaded, causing the test to fail prematurely. To avoid this, use a waitFor() function, that only runs once it has detected that a html element has loaded. You pass the waitFor() function a css selector used to identify the element as an argument.
*/


const waitFor = selector => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (document.querySelector(selector)) {
        clearInterval(interval);
        clearTimeout(timeout);
        resolve();
      }
    }, 30);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      reject();
    }, 2000);
  });
};


/*--Example Use
it('After searching, dropdown opens up', async () => {
  const input = document.querySelector('input');
  input.value = 'avengers';
  input.dispatchEvent(new Event('input'));

  await waitFor('.dropdown-item');

  const dropdown = document.querySelector('.dropdown');
  expect(dropdown.className).to.include('is-active');
});
--*/
