/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Animation Update Event.
 *
 * This event is dispatched by an animation when it updates. This happens when the animation changes frame,
 * based on the animation frame rate and other factors like `timeScale` and `delay`.
 *
 * Listen for it on the Animation using `anim.on('update', listener)`
 *
 * @event Phaser.Animations.Events#ANIMATION_UPDATE
 * @since 3.50.0
 *
 * @param {Phaser.Animations.Animation} animation - A reference to the Animation that has updated on the Sprite.
 * @param {Phaser.Animations.AnimationFrame} frame - The current Animation Frame of the Animation.
 * @param {Phaser.GameObjects.Sprite} gameObject - A reference to the Game Object on which the animation updated.
 */
module.exports = 'update';
