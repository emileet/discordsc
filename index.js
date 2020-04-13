require( 'dotenv' ).config();

const fs = require( 'fs' );
const request = require( 'request' );

const run_discordsc = () => {
    let status_index = 0;
    let data = { statuses: [] };

    setInterval( () => {
        data = JSON.parse( fs.readFileSync( './data/presence.json' ) );
        if ( status_index >= data.statuses.length ) status_index = 0;

        let options = {
            method: 'PATCH',
            url: 'https://discordapp.com/api/v6/users/@me/settings',
            headers: {
                'Authorization': process.env.TOKEN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
                "custom_status": {
                    "text": data.statuses[ status_index ],
                    "emoji_id": data.emojis[ status_index ].emoji_id,
                    "emoji_name": data.emojis[ status_index++ ].emoji_name,
                    "expires_at": null
                }
            } )
        };

        request( options, function ( error, response, body ) { } );
    }, 15000 );
};

run_discordsc();