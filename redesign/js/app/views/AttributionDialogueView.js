'use strict';

var $ = require( 'jquery' ),
	AttributionDialogue = require( '../AttributionDialogue' );

var AttributionDialogueView = function() {
	this._dialogue = new AttributionDialogue();
	this._dialogue.init();
};

$.extend( AttributionDialogueView.prototype, {
	/**
	 * @type {AttributionDialogue}
	 */
	_dialogue: null,

	/**
	 * Turns a $form.serializeArray return value into an object
	 * @param {Object[]} formValues
	 * @returns {{}}
	 * @private
	 */
	_formValuesToObj: function( formValues ) {
		var form = {};
		$.each( formValues, function() {
			form[ this.name ] = this.value;
		} );

		return form;
	},

	_submit: function( e, $form ) {
		this._dialogue.currentStep().complete( this._formValuesToObj( $form.serializeArray() ) );
		e.preventDefault();
	},

	/**
	 * @param {jQuery} $dialogue
	 */
	render: function( $dialogue ) {
		var $step = this._dialogue.currentStep().render(),
			self = this;

		$step.find( '.immediate-submit input:radio' ).click( function() {
			$( this ).closest( 'form' ).submit();
		} );
		$step.find( 'form' ).submit( function( e ) {
			self._submit( e, $( this ) );
		} );

		$dialogue.html( $step );
	}
} );

module.exports = AttributionDialogueView;
