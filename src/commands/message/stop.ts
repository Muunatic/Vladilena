import { player } from '../../client';

module.exports = {
    name: 'stop',
    async execute(message) {
        const queue = await player.getQueue(message.guild.id);
        if (!queue || !queue.playing) return message.reply('**Tidak ada music yang berjalan**');
        if (!message.member.voice.channel) return message.reply('**Kamu tidak divoice channel!**');
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply('**Kamu tidak divoice channel yang sama!**');
        queue.destroy();
        message.reply('**Lagu telah distop**');
    },
};