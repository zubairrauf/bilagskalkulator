/**
 * BLOCK: trptx-bilagsslider
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InspectorControls } = wp.editor;
// const { ServerSideRender } = wp.components;

registerBlockType( 'cgb/block-trptx-bilagsslider', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Bilagskalkulator' ), // Block title.
	icon: 'calculator', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'widgets', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	attributes: {
		title: { type: 'string', default: 'Hva kan du spare med bilagsautomasjon?' },
		description: { type: 'string', default: 'Finn ut hva bilagsautomasjon kan bety for deg og din bedrift ved å bruke kalkulatoren nedenfor til å estimere hvor mye du vil spare i kostnad og tid.' },
		sliderValue: { type: 'string', default: '1000' },
		timeWithoutAutomation: { type: 'string', default: 180 },
		timeWithAutomation: { type: 'string', default: 26 },
		buttonText: { type: 'string', default: 'Book en demo' },
		buttonURL: { type: 'string', default: 'https://www.tripletex.no/kontakt-oss' },
	},

	edit: ( { attributes, setAttributes, className } ) => {
		return (
			<Fragment>
				<div className="trpltx-preview">
					<img src={ cgbGlobal.my_image_url } alt="Preview of Bilagsslider" />
				</div>
				<InspectorControls>
					<div className="tpltx-input-container">
						<label htmlFor="input-timewithout"> Tid uten automasjon:</label><br />
						<input
							id="input-timewithout"
							type="text"
							value={ attributes.timeWithoutAutomation }
							onChange={ e => setAttributes( { timeWithoutAutomation: e.target.value } ) }
							onBlur={ e => {
								if ( e.target.value.replace( /\s/g, '' ).length > 0 ) {
									setAttributes( { timeWithoutAutomation: e.target.value } );
								} else {
									setAttributes( { timeWithoutAutomation: 180 } );
								}
							} }
						/>
						<span>sekunder</span>
						<br /><br />
						<label htmlFor="input-timewith"> Tid med autmasjon:</label><br />
						<input
							id="input-timewith"
							type="text"
							value={ attributes.timeWithAutomation }
							onChange={ e => setAttributes( { timeWithAutomation: e.target.value } ) }
							onBlur={ e => {
								if ( e.target.value.replace( /\s/g, '' ).length > 0 ) {
									setAttributes( { timeWithAutomation: e.target.value } );
								} else {
									setAttributes( { timeWithAutomation: 26 } );
								}
							} }
						/>
						<span>sekunder</span>
						<br /><br />
						<label htmlFor="input-button-text"> Button tekst:</label><br />
						<input
							id="input-buttton-text"
							type="text"
							value={ attributes.buttonText }
							onChange={ e => setAttributes( { buttonText: e.target.value } ) }
							onBlur={ e => {
								if ( e.target.value.replace( /\s/g, '' ).length > 0 ) {
									setAttributes( { buttonText: e.target.value } );
								} else {
									setAttributes( { buttonText: 'Book en demo' } );
								}
							} }
						/><br /><br />
						<label htmlFor="input-button-url"> Button url:</label><br />
						<input
							id="input-button-url"
							type="text"
							value={ attributes.buttonURL }
							onChange={ e => setAttributes( { buttonURL: e.target.value } ) }
							onBlur={ e => {
								if ( e.target.value.replace( /\s/g, '' ).length > 0 ) {
									setAttributes( { buttonURL: e.target.value } );
								} else {
									setAttributes( { buttonURL: 'https://www.tripletex.no/kontakt-oss' } );
								}
							} }
						/><br /><br />
					</div>
				</InspectorControls>
			</Fragment>
		);
	},

	save: ( ) => ( null ),
} );
