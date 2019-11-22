/* eslint-disable no-invalid-this*/
/**
  * @param {Component} component (this)
  * @param {String} container Container reference
  */
export const touchGestures = (component, container) => {
  const passiveParam = _supportsPassive() ? { passive: true } : false;
  const cracksSlider = component.shadowRoot.querySelector(container);

  cracksSlider.addEventListener('touchstart', _onTouchStart.bind(component, container), passiveParam);
  cracksSlider.addEventListener('touchend', _onTouchEnd.bind(component, container), passiveParam);
  cracksSlider.addEventListener('touchmove', _onTouchMove.bind(component, container), passiveParam);
};

/**
  * @param {String} container Container reference
  * @param {Event} event On touch start
  */
function _onTouchStart(container, event) {
  this._stopAutoplay(this);
  updateAnimationSpeed(0, this, container);
  this.touchStartX = event.touches[0].clientX;
  this.touchStartY = event.touches[0].clientY;
}

/**
   * Operation to be performed on touch end
   *
   * Calculates the angle of the touch movement and moves the X/Y position accordingly.
   * If the move length or the angle is not enough, resets the position
   *
   * @param {String} container Container reference
   * @param {Object} event The event object
   */
function _onTouchEnd(container, event) {
  this.touchEndX = event.changedTouches[0].clientX;
  this.touchEndY = event.changedTouches[0].clientY;
  const touchLengthX = this.touchStartX - this.touchEndX;
  const touchLengthY = this.touchStartY - this.touchEndY;
  const angle = Math.atan2(touchLengthY, touchLengthX) * 180 / Math.PI;
  if (Math.abs(angle) < this.minTouchAngle || Math.abs(angle) > (180 - this.minTouchAngle)) {
    if (touchLengthX > this.minTouchLength) {
      this._next();
    } else if (touchLengthX < -this.minTouchLength) {
      this._prev();
    } else {
      updateXPosition(null, this, container);
    }
  } else {
    updateXPosition(null, this, container);
  }
  this._startAutoplay();
  updateAnimationSpeed(this.animationSpeed, this, container);
}

/**
   * Operation to be performed on touch move
   *
   * Moves the element in the X axis
   * @param {String} container Container reference
   * @param {Object} event The event object returned by the browser
   */
function _onTouchMove(container, event) {
  const touchMoveX = event.touches[0].clientX;
  const touchLength = this.touchStartX - touchMoveX;
  updateXPosition(touchLength, this, container);
}

/**
   * Function to update animation speed
   * @param {number} animationSpeed New animation speed. Defaults to this.animationSpeed
   * @param {Component} component Component (this)
   * @param {String} container Container reference
   */
export function updateAnimationSpeed(animationSpeed, component, container) {
  component.shadowRoot.querySelector(container).style.transition = `transform ${animationSpeed}s ease-in-out`;
}

/**
  * Update X translation of the slider
  * @param {Number} offset Number of pixels to move from actual position
  * @param {Component} component Component (this)
  * @param {String} container Container reference
  */
export function updateXPosition(offset = 0, component, container) {
  const actualPosition = (component.index * component.sliderWidth) + offset;
  if (component.sliderWidth) {
    component.shadowRoot.querySelector(container).style.transform = `translate(-${actualPosition}px)`;
  } else {
    component.coordinate = -(component.shadowRoot.querySelector(container).clientWidth * component.index) - offset;
  }
  setTimeout(() => {
    if (component.sliderWidth) component._updateItemsVisibility();
  }, component.animationSpeed * 1000);
}

/**
   * Returns if the browser supports the passive property in touch events
   *
   * Test via a getter in the options object to see if the passive property is accessed
   *
   * @return {boolean}
   */
export const _supportsPassive = () => {
  let supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassive = true;
        return supportsPassive;
      },
    });
    window.addEventListener('testPassive', null, opts);
    window.removeEventListener('testPassive', null, opts);
  } catch (e) { return e; }
  return supportsPassive;
};
