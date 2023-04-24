export function isNodeList(target) {
  return NodeList.prototype.isPrototypeOf(target)
}

export function isHTMLCollection(target) {
  return HTMLCollection.prototype.isPrototypeOf(target)
}

export function isHTMLElement(target) {
  return HTMLElement.prototype.isPrototypeOf(target)
}

export function isElement(target) {
  return Element.prototype.isPrototypeOf(target)
}

const defaultOptions = {
  removeListener: true,
}

function vanillaClickOutside(selector, callback, options) {
  const theOptions = { ...defaultOptions, ...options }

  const listener = (event) => {
    if (isNodeList(selector) || isHTMLCollection(selector)) {
      // Not working with spread: https://github.com/developit/microbundle/issues/693
      // eslint-disable-next-line unicorn/prefer-spread
      if (Array.from(selector).some((s) => s.contains(event.target))) {
        return callback(false, event)
      }
    } else if (isHTMLElement(selector)) {
      if (selector.contains(event.target)) {
        return callback(false, event)
      }
    } else {
      console.warn('Undefined type of', typeof selector, selector)
      return callback(undefined, event)
    }

    if (theOptions.removeListener) {
      document.removeEventListener('click', listener)
    }

    return callback(true, event)
  }

  document.addEventListener('click', listener)

  return listener
}

export default vanillaClickOutside
