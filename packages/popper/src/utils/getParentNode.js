/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
export default function getParentNode(element) {
  if (element.nodeName === 'HTML' || element.nodeName === 'html') {
    return element;
  }
  return element.parentNode || element.host;
}
