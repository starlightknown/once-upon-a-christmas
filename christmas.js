// Use this sample to create your own voice commands
intent('hello elf', p => {
    p.play('(hi there,I am here to take you on a beautiful lane of memories, Do you want to come with me? )');
    p.then(start);
});
let start = context(() => {
    follow("(probably|)$(ANSWER yes|sure|no)", p => {
        let answer = p.ANSWER.value;
        if (['yes', 'sure'].indexOf(answer) >= 0) {
            p.play({command: 'start'}); 
            p.play("let's get you started");
            p.play("First, I will tell you a story")
        } else if (answer === 'no') {
            p.play("we look forward to take you there next time!")
        }
    })
});

intent('helper elf lets begin the story,', p => {
   p.play('Okay lets start. Once upon a time, on Christmas Eve, old Scrooge sat busy in his office. It was very cold outside and in Scrooges office it was not much warmer either.Suddenly, Scrooges nephew entered the office. A merry Christmas, uncle! God save you! Fred said. Bah! said Scrooge, Humbug!. Christmas a humbug, uncle! said Scrooges nephew. You dont mean that, I am sure? I do, said Scrooge. Whats Christmas time to you? You have to pay bills without money! ')
    p.play('Youre a year older but not an hour richer! Keep Christmas in your way, and let me keep it in mine. Keep it? But you dont keep it, said Scrooges nephew, who was a very friendly young man. He even tried to cheer Scrooge up and invited him for dinner on Christmas Day. But Scrooge said no and sent him out.When Scrooges nephew left, two gentlemen came in to collect money for the poor who had no place they could go. Stingy Scrooge, however, didnt give the gentlemen any money. ')
    p.play('Are there no prisons? Are there no workhouses? he asked sarcastically and told them to leave the office. When it was time to close the office, Scrooge talked to his clerk, Bob Cratchit.You want all day off tomorrow, dont you? said Scrooge. If that is okay, Sir, answered the clerk. Its not okay, said Scrooge, and it is not fair. After all, I have to pay you for the day although you dont work. But if it must be, I want you to start work even earlier the following morning.')
    p.play(' Cratchit promised that he would and the two went home.Scrooge lived all alone in an old house. The yard was very dark and scary that night and when Scrooge wanted to unlock the door, he had the feeling that he saw the ghost of his old business partner Marley, who died a long time ago, there. This was rather spooky, but Scrooge was not frightened easily. Humbug, he said, opened the door and walked in. He locked himself in, however, which he usually didnt do. ')
           p.play('But then he felt safe again and sat down before the fire. Suddenly, Scrooge heard a noise, deep down below, as if someone was dragging a heavy chain. But then he felt safe again and sat down before the fire. Suddenly, Scrooge heard a noise, deep down below, as if someone was dragging a heavy chain.Suddenly, the clock struck one. Light flashed up in the room and a small hand drew back the curtains of his bed. Then Scrooge found himself face to face with the visitor. ')
    p.play('It was a strange figure – like a child: yet not so like a child as like an old woman. Her hair, which hung about her neck and down her back, was white as if with age; and yet the face had not a wrinkle in it. Who, and what are you? Scrooge asked the ghost. I am the Ghost of Christmas Past. Rise and come with me. The ghost took Scrooge back in time, to a place where Scrooge was a boy. There Scrooge could see his younger self playing with other children.')
    p.play('They were cheerfully running around the Christmas tree; and although they were poor, they had lots of fun.The spirit also took Scrooge to a warehouse, where Scrooge was an apprentice. Scrooge saw the merry Christmas Eve they spent in the office with their boss Mr Fezziwig and his family. There was food and music and dancing and everybody was happy. Then the spirit took Scrooge to yet another place. Scrooge was older now. He was not alone, but sat by the side of a beautiful young girl')
    p.play('Belle. There were tears in her eyes. It is sad to see, she said, softly. that another love has displaced me – the love of gold. Your heart was full of love once, but now …? I think it is better for us to part. May you be happy in the life you have chosen. Spirit, said Scrooge, show me no more. Take me home. Why do you torture me? One shadow more, said the ghost. They were in another scene and place; a room, not very large or handsome, but full of comfort.')
    p.play(' There was a happy family celebrating Christmas with all their warmth and heartiness. Scrooge recognized Belle, his former girlfriend. She was now married and had children.Spirit, said Scrooge in a broken voice, Take me back! I cannot bear it any longer. He struggled with the ghost to take him back. And finally Scrooge found himself in his own bed again. He was very exhausted and sank into a heavy sleep. Scrooge woke up in the middle of a snore, just before the clock struck one again. ')

});
intent('thank you for the story, whats next?', p=>{
    p.play('You can either take pictures in the photobooth, we have different fun christmas filters or you can bake with a friend together on video call. To send the reciecpe use Twilios feature')
});