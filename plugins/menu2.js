let handler = async (m, {conn}) => {
    conn.send2ButtonLoc(m.chat, require('fs').readFileSync('./Millie/millie.jpg'),`💋 ᴍɪʟʟɪᴇ 💋`,watermark, 'Menu', `.listt`)
    }
    handler.help = ['menu']
    
    handler.command = /^(menu)$/i
    module.exports = handler



       
