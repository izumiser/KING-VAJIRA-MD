/**

                                                            
 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Izuku-Md
 * @author : excelottah <https://github.com/excelottah6>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const DB = require('../lib/scraper');
const { execSync } = require('child_process');
const { tlang, Config, prefix, cmd, sleep } = require('../lib');

let updating = false;

cmd({
    pattern: "update",
    desc: "Shows repo's refreshed commits.",
    category: "misc",
    filename: __filename
},
async (Void, citel, text, { isCreator }) => {
    if (!isCreator) return citel.reply('This command is only for my owner');

    if (updating) {
        citel.reply("An update is already in progress. Please wait.");
        return;
    }

    updating = true;
    let asciiBorder = '╔══════════════════════════╗\n';
    asciiBorder += '║    Updater - KING VAJIRA MD    ║\n';
    asciiBorder += '╚══════════════════════════╝\n';

    // Create a loading bar
    const loadingBarLength = 20;
    const loadingMessage = {
        text: `${asciiBorder}Updating: [${' '.repeat(loadingBarLength)}] 0%`,
        footer: 'UPDATER',
        headerType: 4
    };
    const { key } = await Void.sendMessage(citel.chat, loadingMessage);

    // Simulate an update process (you can replace this with your actual update logic)
    for (let i = 1; i <= loadingBarLength; i++) {
        await sleep(1000); // Simulate a step in the update process
        const progress = (i / loadingBarLength) * 100;
        const updatedMessage = {
            text: `${asciiBorder}Updating: [${'█'.repeat(i)}${' '.repeat(loadingBarLength - i)}] ${progress.toFixed(0)}%`,
            footer: 'UPDATER',
            headerType: 4
        };
        await Void.sendMessage(citel.chat, updatedMessage, { edit: key });
    }

    // After the update process, send the final message
    const finalMessage = {
        text: `${asciiBorder}📥vajira Update finished📥.`,
        footer: 'UPDATER',
        headerType: 4
    };
    await Void.sendMessage(citel.chat, finalMessage, { edit: key });
    updating = false;
});

   //---------------------------------------------------------------------------  
/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const DB = require('../lib/scraper')
const { execSync } = require('child_process')
const { tlang, Config, prefix,cmd } = require('../lib')
    //---------------------------------------------------------------------------
cmd({
            pattern: "update2",
            desc: "Shows repo\'s refreshed commits.",
            category: "misc",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply('This command is only for my owner')
            let commits = await DB.syncgit()
            if (commits.total === 0) {
                citel.reply(`Hey ${citel.pushName}. You have latest version installed.`)
            } else {
                let update = await DB.sync()
                  let buttonMessaged = {
                    text: update,
                    footer: 'UPDATER',
                    headerType: 4
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }

        }
    )
