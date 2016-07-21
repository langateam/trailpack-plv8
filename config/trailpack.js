/**
 * Trailpack Configuration
 *
 * @see {@link http://trailsjs.io/doc/trailpack/config}
 */
module.exports = {
  type: 'misc',

  /**
   * Configure the lifecycle of this pack; that is, how it boots up, and which
   * order it loads relative to other trailpacks.
   */
  lifecycle: {
    initialize: {
      listen: [ 'trailpack:knex:initialized' ],
      emit: []
    }
  }
}

