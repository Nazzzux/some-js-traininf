const input = document.getElementById('input');
const defaultText = document.getElementById('default')
const debounceText = document.getElementById('debounce');
const throttleText = document.getElementById('throttle');

const updateDebounceText = debounce((text) =>{
  debounceText.textContent = text;
}, 1000);

const updateThrottleText = throttle((text) =>{
  debounceText.textContent = text;
}, 1000);

input.addEventListener('input', (item) => {
  defaultText.textContent = item.target.value;
  updateDebounceText(item.target.value);
  updateThrottleText(item.target.value);
})

function debounce(func, delayMs = 1000) {
  let timeoutID;
  return function() {
    const funcCall = () => {
      func.apply(this, arguments)
    };
    clearTimeout(timeoutID);
    timeoutID = setTimeout(funcCall, delayMs)
  }
}



function throttle(func, delayMs = 1000) {
  let isThrotteled = false;
  let savedArgs;
  let savedThis;

  function wrapper () {

    if (isThrotteled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);
    isThrotteled = true;
    
    setTimeout(() => {
      isThrotteled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      };

    }, delayMs);
  };


  return wrapper;
}








/*

const debounce = (func, timeMs) => {
  let timeout;
  return function() {
    const fnCall = () => {
      func.apply(this, arguments);
    };
    clearTimeout(timeout)
    timeout = setTimeout(fnCall, timeMs);
  }
}

*/