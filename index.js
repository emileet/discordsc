require( 'dotenv' ).config();

const { request } = require( 'gaxios' );
const fs = require( 'fs' );

const run_discordsc = () => {
    if ( !fs.existsSync( './data/presence.json' ) ) return console.log( `error: 'data/presence.json' doesn't exist!` );

    let status_index = 0;

    setInterval( async () => {
        const data = JSON.parse( fs.readFileSync( './data/presence.json' ) );
        if ( status_index >= data.statuses.length ) status_index = 0;

        const options = {
            url: 'https://discordapp.com/api/v6/users/@me/settings',
            method: 'PATCH',
            headers: {
                'Authorization': process.env.TOKEN,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify( {
                "custom_status": {
                    "text": data.statuses[ status_index ],
                    "emoji_id": data.emojis[ status_index ].emoji_id,
                    "emoji_name": data.emojis[ status_index++ ].emoji_name,
                    "expires_at": null
                }
            } )
        };

        await request( options );
    }, 15000 );
};

run_discordsc();