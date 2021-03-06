/**
 * @licence GNU GPL v3
 * @author snater.com < wikimedia@snater.com >
 */

'use strict';

var Licence = require( './Licence' );

/**
 * Array of licences. The licence will be detected by order: If an asset features multiple licences,
 * only the first one featured in this list will be detected.
 * @type {Licence[]} - sorted by restrictiveness
 */
module.exports = [
	new Licence( 'cc-by-sa-4.0', [ 'cc', 'cc4' ], [], 'CC BY-SA 4.0', /^(Bild-)?CC-BY-SA(-|\/)4.0(([^\-]+.+|-migrated)*)?$/i, 'https://creativecommons.org/licenses/by-sa/4.0/legalcode' ),
	new Licence( 'cc-by-sa-3.0-de', [ 'cc', 'cc3' ], [ 'cc-by-sa-3.0', 'cc-by-sa-4.0' ], 'CC BY-SA 3.0 DE', /^(Bild-)?CC-BY-SA(-|\/)3.0(-|\/)DE/i, 'https://creativecommons.org/licenses/by-sa/3.0/de/legalcode' ),
	new Licence( 'cc-by-sa-3.0', [ 'cc', 'cc3' ], [ 'cc-by-sa-3.0-de', 'cc-by-sa-4.0' ], 'CC BY-SA 3.0', /^(Bild-)?CC-BY-SA(-|\/)3.0(([^\-]+.+|-migrated)*)?$/i, 'https://creativecommons.org/licenses/by-sa/3.0/legalcode' ),
	new Licence( 'cc-by-sa-3.0-ported', [ 'cc', 'cc3', 'ported' ], [], 'CC BY-SA 3.0', /^(Bild-)?CC-BY-SA(-|\/)3.0-\w+$/i, 'https://creativecommons.org/licenses/by-sa/3.0/legalcode' ),
	new Licence( 'cc-by-sa-2.5', [ 'cc', 'cc2.5' ], [ 'cc-by-sa-3.0-de', 'cc-by-sa-3.0', 'cc-by-sa-4.0' ], 'CC BY-SA 2.5', /^(Bild-)?CC-BY-SA(-|\/)2.5(([^\-]+.+|-migrated)*)?$/i, 'https://creativecommons.org/licenses/by-sa/2.5/legalcode' ),
	new Licence( 'cc-by-sa-2.5-ported', [ 'cc', 'cc2.5', 'ported' ], [], 'CC BY-SA 2.5', /^(Bild-)?CC-BY-SA(-|\/)2.5-\w+$/i, 'https://creativecommons.org/licenses/by-sa/2.5/legalcode' ),
	new Licence( 'cc-by-sa-2.0-de', [ 'cc', 'cc2', 'cc2de' ], [ 'cc-by-sa-2.0', 'cc-by-sa-2.5', 'cc-by-sa-3.0-de', 'cc-by-sa-3.0', 'cc-by-sa-4.0' ], 'CC BY-SA 2.0 DE', /^(Bild-)?CC-BY-SA(-|\/)2.0(-|\/)DE/i, 'https://creativecommons.org/licenses/by-sa/2.0/de/legalcode' ),
	new Licence( 'cc-by-sa-2.0', [ 'cc', 'cc2' ], [ 'cc-by-sa-2.0-de', 'cc-by-sa-2.5', 'cc-by-sa-3.0-de', 'cc-by-sa-3.0', 'cc-by-sa-4.0' ], 'CC BY-SA 2.0', /^(Bild-)?CC-BY-SA(-|\/)2.0(([^\-]+.+|-migrated)*)?$/i, 'https://creativecommons.org/licenses/by-sa/2.0/legalcode' ),
	new Licence( 'cc-by-sa-2.0-ported', [ 'cc', 'cc2', 'ported' ], [], 'CC BY-SA 2.0', /^(Bild-)?CC-BY-SA(-|\/)2.0-\w+$/i, 'https://creativecommons.org/licenses/by-sa/2.0/legalcode/' ),
	new Licence( 'cc-by-sa-1.0', [ 'cc', 'cc1' ], [ 'cc-by-sa-2.0', 'cc-by-sa-2.0-de', 'cc-by-sa-2.5', 'cc-by-sa-3.0-de', 'cc-by-sa-3.0', 'cc-by-sa-4.0' ], 'CC BY-SA 1.0', /^(Bild-)?CC-BY-SA((-|\/)1.0(([^\-]+.+|-migrated)*)?)?$/i, 'https://creativecommons.org/licenses/by-sa/1.0/legalcode' ),
	new Licence( 'cc-by-sa-1.0-ported', [ 'cc', 'cc1', 'ported' ], [], 'CC BY-SA 1.0', /^(Bild-)?CC-BY-SA((-|\/)1.0)?-\w+$/i, 'https://creativecommons.org/licenses/by-sa/1.0/legalcode' ),

	new Licence( 'cc-by-4.0', [ 'cc', 'cc4', 'ccby' ], [ 'cc-by-sa-4.0' ], 'CC BY 4.0', /^CC-BY-4.0(([^\-]+.+|-migrated)*)?$/i, 'https://creativecommons.org/licenses/by/4.0/legalcode' ),
	new Licence( 'cc-by-3.0-de', [ 'cc', 'cc3', 'ccby' ], [ 'cc-by-3.0', 'cc-by-sa-3.0-de', 'cc-by-sa-3.0' ], 'CC BY 3.0 DE', /^CC-BY(-|\/)3.0(-|\/)DE/i, 'https://creativecommons.org/licenses/by/3.0/de/legalcode' ),
	new Licence( 'cc-by-3.0', [ 'cc', 'cc3', 'ccby' ], [ 'cc-by-3.0-de', 'cc-by-sa-3.0-de', 'cc-by-sa-3.0' ], 'CC BY 3.0', /^CC-BY-3.0(([^\-]+.+|-migrated)*)?$/i, 'https://creativecommons.org/licenses/by/3.0/legalcode' ),
	new Licence( 'cc-by-3.0-ported', [ 'cc', 'cc3', 'ccby', 'ported' ], [], 'CC BY 3.0', /^CC-BY-3.0-\w+$/i, 'https://creativecommons.org/licenses/by/3.0/legalcode' ),
	new Licence( 'cc-by-2.5', [ 'cc', 'cc2.5', 'ccby' ], [ 'cc-by-3.0-de', 'cc-by-3.0', 'cc-by-4.0', 'cc-by-sa-2.5', 'cc-by-sa-3.0-de', 'cc-by-sa-3.0' ], 'CC BY 2.5', /^CC-BY-2.5(([^\-]+.+|-migrated)*)?$/i, 'https://creativecommons.org/licenses/by/2.5/legalcode' ),
	new Licence( 'cc-by-2.5-ported', [ 'cc', 'cc2.5', 'ccby', 'ported' ], [], 'CC BY 2.5', /^CC-BY-2.5-\w+$/i, 'https://creativecommons.org/licenses/by/2.5/legalcode' ),
	new Licence( 'cc-by-2.0-de', [ 'cc', 'cc2', 'cc2de', 'ccby' ], [ 'cc-by-2.0', 'cc-by-2.5', 'cc-by-3.0-de', 'cc-by-3.0', 'cc-by-sa-2.0-de', 'cc-by-sa-2.0' ], 'CC BY 2.0 DE', /^CC-BY(-|\/)2.0(-|\/)DE/i, 'https://creativecommons.org/licenses/by/2.0/de/legalcode' ),
	new Licence( 'cc-by-2.0', [ 'cc', 'cc2', 'ccby' ], [ 'cc-by-2.0-de', 'cc-by-2.5', 'cc-by-3.0-de', 'cc-by-3.0', 'cc-by-4.0', 'cc-by-sa-2.0-de', 'cc-by-sa-2.0' ], 'CC BY 2.0', /^CC-BY-2.0(([^\-]+.+|-migrated)*)?$/i, 'https://creativecommons.org/licenses/by/2.0/legalcode' ),
	new Licence( 'cc-by-2.0-ported', [ 'cc', 'cc2', 'ccby', 'ported' ], [], 'CC BY 2.0', /^CC-BY-2.0-\w+$/i, 'https://creativecommons.org/licenses/by/2.0/legalcode' ),
	new Licence( 'cc-by-1.0', [ 'cc', 'cc1', 'ccby' ], [ 'cc-by-2.0-de', 'cc-by-2.0', 'cc-by-2.5', 'cc-by-3.0-de', 'cc-by-3.0', 'cc-by-sa-1.0' ], 'CC BY 1.0', /^CC-BY-1.0(([^\-]+.+|-migrated)*)?$/i, 'https://creativecommons.org/licenses/by/1.0/legalcode' ),
	new Licence( 'cc-by-1.0-ported', [ 'cc', 'cc1', 'ccby', 'ported' ], [], 'CC BY 1.0', /^CC-BY-1.0-\w+$/i, 'https://creativecommons.org/licenses/by/1.0/legalcode' ),

	new Licence( 'cc', [ 'unsupported' ], [], 'CC', /CC-BY/i ),

	new Licence( 'cc-zero', [ 'cc', 'cc0' ], [], 'CC0 1.0', /^(cc-zero|Bild-CC-0)/i, 'https://creativecommons.org/publicdomain/zero/1.0/legalcode' ),
	new Licence( 'PD', [ 'pd' ], [], 'Public Domain', /^(Bild-)?(PD|Public domain|Copyrighted free use)\b/i ),

	new Licence( 'unknown', [ 'unknown' ], [], 'Unknown', '', '' )
];
