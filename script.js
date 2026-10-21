"use strict";

const books = [
    {
        id: 1, title: "My Husband Is a Mafia Boss",
        author: "Yanalovesyouu", genre: "Romance",
        synopsis: "An unexpected marriage brings two very different people into a world of secrets, danger, and unexpected affection.",
        chapter: "The Marriage Nobody Expected",
        paragraphs: [
            "Mira never imagined that a single signature could change her entire life. The contract lay between her and Adrian, a man whose name people whispered about but whose eyes looked strangely lonely.",
            "\"You don't have to trust me today,\" Adrian said. \"Just give me the chance to prove that this marriage can be more than an agreement.\" Mira looked at the pen in her hand. She was afraid of the unknown, but something in his voice made her pause.",
            "Outside, the city lights flickered like distant stars. Mira signed her name, not knowing that the coldest-looking man she had ever met would slowly become the person who made her feel safest."
        ]
    },
    {
        id: 2, title: "He's Into Her",
        author: "Maxinejiji", genre: "Teen Fiction",
        synopsis: "A new school, complicated friendships, and unexpected feelings turn an ordinary student life upside down.",
        chapter: "A Very Unordinary First Day",
        paragraphs: [
            "Nadine promised herself that transferring schools would be a fresh start. No old rumors, no awkward memories, and absolutely no unnecessary drama. She had a notebook full of plans and a timetable she had checked three times.",
            "Then she bumped into the most arrogant boy she had ever met. His books fell, her coffee spilled, and his first words were, \"Do you always walk like you own the hallway?\" Nadine smiled sweetly. \"Only when someone stands in the middle of it.\"",
            "By lunch, half the school knew her name. Nadine considered that a disaster. She had no idea the boy from the hallway would become the biggest unexpected part of her school year."
        ]
    },
    {
        id: 3, title: "I Love You Since 1892",
        author: "Binibining Mia", genre: "Historical Fiction",
        synopsis: "A mysterious journey through time brings a young woman into a world where love and history collide.",
        chapter: "The Letter in the Old Trunk",
        paragraphs: [
            "The letter was hidden beneath layers of lace and yellowed photographs. Elena found it while helping her grandmother clean an old trunk. The paper smelled of rain and forgotten summers.",
            "Its first line made her hands tremble: To the woman I will meet in another century. The letter described a garden, a silver watch, and a promise made beneath a flowering tree. At the bottom was a date from 1892.",
            "That night, Elena dreamed of a stranger standing in a garden she had never visited. He called her by a name she had never heard, yet she woke with the unmistakable feeling that someone, somewhere, was waiting for her."
        ]
    },
    {
        id: 4, title: "Chasing the Sun",
        author: "Inksteady", genre: "Drama",
        synopsis: "A young dreamer searches for hope while facing change, loss, and difficult choices.",
        chapter: "The Morning After Goodbye",
        paragraphs: [
            "Every morning, Sam watched the sunrise from the roof of their small house. It was the one thing that remained the same after the family lost the place they had called home for years.",
            "His mother said that starting over was not the same as losing everything. Sam wanted to believe her, but his old school, his friends, and the familiar street were now memories. He kept a notebook of places he hoped to see someday.",
            "On the first morning in their new neighborhood, he climbed a different staircase and found the same golden sky. Maybe hope was not a place he had to return to. Maybe it was something he could carry."
        ]
    },
    {
        id: 5, title: "In the Midst of the Crowd",
        author: "Inksteady", genre: "Romance",
        synopsis: "Among countless strangers, two people slowly discover a connection neither expected.",
        chapter: "The Stranger with the Blue Umbrella",
        paragraphs: [
            "The station was full of rushing feet, hurried apologies, and announcements that disappeared beneath the noise. Lea was late, her phone was dying, and the rain had soaked the edge of her notebook.",
            "A blue umbrella appeared above her head. Its owner, a stranger with kind eyes, simply said, \"You looked like you needed a little shelter.\" He walked beside her until the rain softened, asking nothing more than her name.",
            "They parted at the next crossing. Lea forgot the color of the stranger's shoes and the exact sound of his laugh, but she remembered how a crowded afternoon had suddenly felt quiet."
        ]
    },
    {
        id: 6, title: "Mistakes We Can't Laugh About",
        author: "Inksteady", genre: "Drama",
        synopsis: "Old choices return, forcing friends to face truths they have avoided.",
        chapter: "The Joke That Went Too Far",
        paragraphs: [
            "Their group chat had always been full of teasing. Everyone laughed, everyone sent stickers, and nobody expected one careless joke to leave a silence that lasted for days.",
            "When Bea finally spoke, her voice was steady even though her hands were not. She explained how the words had followed her long after everyone else had forgotten them. The room grew quiet as her friends realized that intention did not erase the hurt.",
            "Nobody could undo that afternoon. They could only apologize honestly, listen without making excuses, and learn that friendship was not measured by how much pain people could pretend was funny."
        ]
    },
    {
        id: 7, title: "Words Written in Water",
        author: "Inksteady", genre: "Drama",
        synopsis: "Unspoken feelings and fading memories shape a story about growing up and letting go.",
        chapter: "Things the River Kept",
        paragraphs: [
            "Every summer, Niko wrote letters to the person he used to be. He folded them carefully and placed them in a tin beside the river, never expecting an answer.",
            "This year, the letters were different. He wrote about the friend who had moved away, the apology he had delayed, and the fear that growing up meant forgetting the people who made childhood feel endless.",
            "The river carried fallen leaves past his shoes. Niko left the tin closed and walked home lighter than before. Not every feeling needed to be preserved forever; some simply needed to be understood."
        ]
    },
    {
        id: 8, title: "Diary ng Panget",
        author: "HaveYouSeenThisGirl", genre: "Romantic Comedy",
        synopsis: "A funny journey through school life, self-confidence, and complicated crushes.",
        chapter: "Dear Diary, He Is So Annoying",
        paragraphs: [
            "Dear Diary, today I discovered that the universe has a personal problem with me. First, I tripped over absolutely nothing. Then my lunch escaped its container. Finally, the most annoying boy in school saw everything.",
            "He laughed so hard that I considered throwing my notebook at him. Instead, I told him his hair looked like a startled chicken. He stopped laughing. I considered that a victory of historical importance.",
            "Unfortunately, he followed me to class, offered to carry my books, and smiled as if we shared a secret. Diary, I have a terrible suspicion that tomorrow will be even more embarrassing."
        ]
    },
    {
        id: 9, title: "She's Dating the Gangster",
        author: "Bianca Bernardino", genre: "Romance",
        synopsis: "A surprising arrangement leads to complicated feelings and a relationship nobody planned.",
        chapter: "The Deal",
        paragraphs: [
            "Athena agreed to pretend to be Kenji's girlfriend for one simple reason: he promised to stop bothering her about the favor she owed him. It sounded easy enough, especially if she remembered that it was only an act.",
            "Their first public appearance lasted less than ten minutes before someone asked how they had fallen in love. Kenji answered with a story so ridiculous that Athena almost ruined the performance by laughing.",
            "On the way home, he asked whether she had enjoyed herself. She said no too quickly. Kenji looked away, hiding a smile, and Athena wondered when pretending had started to feel a little too real."
        ]
    },
    {
        id: 10, title: "The Four Bad Boys and Me",
        author: "Tina Lata", genre: "Teen Fiction",
        synopsis: "One ordinary girl finds herself caught in the chaos surrounding four very different boys.",
        chapter: "Four Problems, One Classroom",
        paragraphs: [
            "Lia's plan for the semester was simple: finish her assignments, avoid trouble, and never volunteer for anything. The class adviser ruined it by assigning her to a project group with four boys famous for breaking every classroom rule.",
            "One was a charming talker, one barely spoke, one treated every assignment like a competition, and the last was always asleep. Lia looked at the group list and quietly asked the universe for a transfer.",
            "Their first meeting ended with a missing marker, a debate about snacks, and one surprisingly good idea. Lia wrote it down. Perhaps the semester would not be peaceful, but it might at least be interesting."
        ]
    },
    {
        id: 11, title: "The Good Girl's Revenge",
        author: "Tina Lata", genre: "Drama",
        synopsis: "A quiet student decides to stand up for herself and discovers how much courage change requires.",
        chapter: "The Day I Said No",
        paragraphs: [
            "For years, Mara had been the person everyone asked for favors. She lent notes, finished group tasks, and smiled when others took credit. She thought being kind meant never making anyone uncomfortable.",
            "When another classmate pushed an unfinished project onto her desk, Mara took a breath and said no. The word was small, but it felt like opening a window in a room where she had been holding her breath.",
            "Some people were disappointed. Others were surprised. Mara learned that the world did not end when she protected her time. For the first time, her kindness included herself."
        ]
    },
    {
        id: 12, title: "Operation: Break the Casanova's Heart",
        author: "Alyloony", genre: "Romantic Comedy",
        synopsis: "A playful plan to teach a heartbreaker a lesson becomes complicated when real feelings appear.",
        chapter: "Mission: Make Him Blush",
        paragraphs: [
            "Jules created a plan with color-coded notes, three trusted friends, and a target who had never met a flirtation he could not answer. Her mission was to make Marco fall for someone who would never fall for him.",
            "The first step was a compliment. Marco blinked. The second was an invitation to study. Marco brought snacks. By the third step, Jules was the one staring at her notes as if they had betrayed her.",
            "When Marco asked whether she was enjoying the mission, Jules nearly dropped her notebook. He had known all along. Worse, he looked genuinely happy that she had chosen to spend time with him."
        ]
    },
    {
        id: 13, title: "Talk Back and You're Dead",
        author: "Alesana Marie", genre: "Romance",
        synopsis: "A sharp-tongued student clashes with a difficult boy, and their arguments take an unexpected turn.",
        chapter: "The Argument of the Century",
        paragraphs: [
            "Rina had a response for everything. Teachers called it confidence, classmates called it entertainment, and one particularly irritating boy called it a dangerous habit.",
            "Their argument began over a seat in the library and somehow reached the subjects of music, manners, and the correct way to drink iced coffee. Neither was willing to surrender. Neither noticed that the librarian had started smiling.",
            "When the closing announcement came, he held the door for her. Rina thanked him without a sarcastic remark. He looked delighted. She immediately regretted giving him the satisfaction."
        ]
    },
    {
        id: 14, title: "Baka Sakali",
        author: "Jonaxx", genre: "Romance",
        synopsis: "Two lives meet unexpectedly, leaving both to wonder whether their encounter was chance or destiny.",
        chapter: "If Only, Perhaps",
        paragraphs: [
            "Luna missed the last bus by seconds. She stood beneath the terminal roof, holding a paper bag of groceries and wondering how she would explain her lateness.",
            "A familiar voice offered her a ride. It belonged to someone she had not seen in years, someone who had once made an ordinary day feel extraordinary. They spoke carefully at first, avoiding the past like a puddle on the road.",
            "When they reached her street, neither hurried to say goodbye. Luna wondered whether life was giving them another chance or simply reminding them of what had once mattered. For tonight, she decided, a question could be enough."
        ]
    },
    {
        id: 15, title: "After the Chains",
        author: "Jonaxx", genre: "Drama",
        synopsis: "After a difficult past, a young woman searches for the strength to reclaim her future.",
        chapter: "A Key of Her Own",
        paragraphs: [
            "For a long time, Isabel believed that the past had already decided what her future would look like. Every new opportunity seemed to come with an old fear attached.",
            "The letter offering her a place in a training program sat on the kitchen table. She read it once, twice, and a third time before allowing herself to smile. It was not a promise that everything would become easy. It was a door she could choose to open.",
            "Isabel packed a small bag and placed the letter inside. Her hands still trembled, but this time she did not mistake fear for a reason to stop."
        ]
    },
    {
        id: 16, title: "Girlfriend for Hire",
        author: "YamYamniJae", genre: "Romantic Comedy",
        synopsis: "A pretend relationship begins as a simple deal but soon brings unexpected complications.",
        chapter: "Terms and Conditions Apply",
        paragraphs: [
            "Nica's new side job came with a list of rules: smile at family dinners, attend two events, and never catch feelings. She found the last rule unnecessary. Her client, after all, was a walking collection of bad jokes.",
            "Their first event went surprisingly well. He remembered her favorite drink, introduced her to everyone, and checked whether she was comfortable whenever the room grew crowded. None of that had been mentioned in their agreement.",
            "Afterward, Nica opened their contract and stared at the final rule. Perhaps she should have requested a penalty clause for unexpected kindness."
        ]
    },
    {
        id: 17, title: "Hell University",
        author: "KnightInBlack", genre: "Horror",
        synopsis: "A student enters a dangerous institution where dark secrets make every decision matter.",
        chapter: "The Bell After Midnight",
        paragraphs: [
            "The admission letter came with one unusual instruction: students must never enter the east wing after midnight. Everyone in the orientation hall laughed until the lights flickered and a bell rang from somewhere beneath the building.",
            "Elias asked the senior beside him what the sound meant. The senior stopped smiling. He said the bell had not rung in twenty years, not since a student vanished from a locked classroom and left behind a desk covered in wet fingerprints.",
            "That night, Elias heard footsteps outside his dormitory. Three slow knocks followed. A voice whispered his name from the other side of the door, even though he had told nobody where he was staying."
        ]
    },
    {
        id: 18, title: "In Love with a Dota Player",
        author: "blue_maiden", genre: "Romantic Comedy",
        synopsis: "An online game brings two personalities together in a playful story about friendship and affection.",
        chapter: "Party of Two",
        paragraphs: [
            "Mika knew her teammate only by a username and an annoyingly cheerful voice chat. He always appeared five minutes early, always brought snacks to their gaming sessions, and always insisted that her terrible jokes were funny.",
            "Their conversations began with strategy and ended with stories about school, family, and dreams that sounded much bigger than their screens. Mika found herself checking the clock whenever their usual game night approached.",
            "One evening, he asked if she would like to meet at a local gaming event. Mika typed yes, deleted it, typed it again, and finally pressed send. For once, she hoped her hands would be steadier than her aim."
        ]
    },
    {
        id: 19, title: "Ex with Benefits",
        author: "youramnesiagirl", genre: "Romance",
        synopsis: "Two former lovers try to keep things simple, but old feelings refuse to stay in the past.",
        chapter: "Rules We Couldn't Keep",
        paragraphs: [
            "They agreed on three rules: no questions about the past, no jealousy, and no promises. It sounded sensible when they discussed it over coffee, as if feelings were something that could be organized into a neat list.",
            "But he still remembered how she liked her coffee. She still knew when he was pretending to be fine. Their easy conversations slipped into familiar silences, and every goodbye seemed to last a little longer.",
            "When she asked whether he ever missed what they had, he did not answer immediately. For the first time, their rules felt less like protection and more like a wall neither of them knew how to climb."
        ]
    },
    {
        id: 20, title: "Secretly Married",
        author: "forgottenglimmer", genre: "Romance",
        synopsis: "A private marriage creates a delicate balance between keeping a secret and discovering real love.",
        chapter: "A Ring Beneath the Sleeve",
        paragraphs: [
            "At work, Elise and Daniel behaved like polite strangers. They exchanged reports, attended meetings, and never sat together at lunch. Nobody knew that a simple gold ring rested on a chain beneath Elise's blouse.",
            "Their secret had seemed necessary at first. But every family gathering, every unanswered question, and every moment they had to pretend not to care made the distance between them harder to bear.",
            "One evening, Daniel asked whether she wanted to keep hiding forever. Elise looked at the ring in her palm. The truth frightened her, but so did the thought of a future where she could never call him hers in the daylight."
        ]
    },
    {
        id: 21, title: "Teen Clash",
        author: "iDangs", genre: "Teen Fiction",
        synopsis: "School rivalries, unexpected alliances, and young ambitions collide in student life.",
        chapter: "The Great Classroom Challenge",
        paragraphs: [
            "The announcement of the school competition divided the class into two teams before the teacher had even finished speaking. Alex and Jamie had competed for the top score all year, and neither intended to lose now.",
            "Their teams argued over posters, schedules, and who would present first. When the project nearly fell apart, Alex discovered that Jamie had stayed late to fix a problem nobody else had noticed.",
            "They did not become best friends overnight. But when the final results were announced, Alex offered a handshake and Jamie accepted. Sometimes respect was the first step toward understanding."
        ]
    },
    {
        id: 22, title: "My Tag Boyfriend",
        author: "MaevelAnne", genre: "Romantic Comedy",
        synopsis: "A playful label leads to an awkward arrangement that may become something genuine.",
        chapter: "It's Complicated on Paper",
        paragraphs: [
            "Their friends gave them the nickname after one harmless photograph and a caption that read more like a confession than a joke. By Monday, half the class had decided they were dating.",
            "They tried to correct everyone, but the rumors only grew. Soon they were sharing snacks, walking home together, and laughing at the ridiculous explanations they invented for their accidental popularity.",
            "When someone asked if they would ever make it official, both answered no at exactly the same time. Then they looked at each other and laughed, a little too nervously for two people who supposedly felt nothing."
        ]
    },
    {
        id: 23, title: "Three Words, Eight Letters, Say It and I'm Yours",
        author: "Girlinlove", genre: "Romance",
        synopsis: "Two people struggle to express the three words that could change their relationship forever.",
        chapter: "Almost Said It",
        paragraphs: [
            "For months, Clara rehearsed the words in her head. She said them to her reflection, to the ceiling, and once to a pillow she immediately blamed for being a terrible audience.",
            "When Theo sat beside her on the school steps and asked what was wrong, she almost told him. His shoulder brushed hers, and the confession rose to her lips before fear pulled it back.",
            "Theo smiled and said he was glad they had become close. Clara smiled too, holding the words for another day. She was beginning to understand that courage did not always arrive all at once."
        ]
    },
    {
        id: 24, title: "Mr. Popular Meets Miss Nobody",
        author: "pinkyjhewelii", genre: "Romantic Comedy",
        synopsis: "A popular student and an overlooked classmate discover that first impressions can be misleading.",
        chapter: "The Partner Assignment",
        paragraphs: [
            "Everyone knew Lucas: student council, basketball team, and a smile that could get him out of almost any situation. Few people knew Aya, who preferred library corners and notebooks to crowded hallways.",
            "A random partner assignment put them together for a presentation. Lucas expected Aya to be quiet and agreeable. Instead, she challenged his first idea, corrected his research, and designed a plan that made the entire project better.",
            "When their presentation earned the highest score, Lucas asked if she would help him with another project. Aya raised an eyebrow. \"Is this for school?\" He paused. \"I was hoping we could start there.\""
        ]
    },
    {
        id: 25, title: "Ang Boyfriend Kong Artista",
        author: "modernongmariaclara", genre: "Romantic Comedy",
        synopsis: "Dating someone famous sounds exciting until ordinary moments become anything but ordinary.",
        chapter: "A Date with a Disguise",
        paragraphs: [
            "Dating a rising actor sounded glamorous until Bea discovered that even buying bread required a cap, sunglasses, and a plan to avoid being recognized.",
            "Their carefully planned date fell apart when a fan spotted him outside the café. Instead of getting angry, he took Bea's hand and led her to a tiny neighborhood bakery where nobody cared who he was.",
            "They shared warm bread on a quiet bench and talked about the future. Bea realized that the best part of dating someone famous was not the attention. It was finding the ordinary person behind the headlines."
        ]
    },
    {
        id: 26, title: "Your Place or Mine",
        author: "turning_japanese", genre: "Romance",
        synopsis: "A chance to share a space leads two people to reconsider what home and companionship mean.",
        chapter: "Two Keys, One Door",
        paragraphs: [
            "When a sudden repair forced Mina to leave her apartment, her friend offered a spare room. She expected a week of inconvenience and a few awkward shared meals.",
            "Instead, she found a home full of small kindnesses: an extra towel folded on the bed, a note beside the kettle, and someone who remembered to ask how her day had gone. Their routines slowly blended into something comfortable.",
            "On the day she could finally return to her own place, Mina stood with her packed bags by the door. She was grateful for the room, but the hardest thing to leave was the feeling that somebody was waiting for her to come home."
        ]
    },
    {
        id: 27, title: "Just for a While",
        author: "OrangeLeaf1988", genre: "Drama",
        synopsis: "A temporary promise brings comfort and raises questions about what happens when time runs out.",
        chapter: "Until the Last Friday",
        paragraphs: [
            "When Paolo promised to help his neighbor prepare for an important exam, he thought it would take a few afternoons. He did not expect the quiet student to become his favorite person to talk to.",
            "They made study schedules, traded playlists, and celebrated every small success. But the calendar kept moving toward the day her family would relocate to another city.",
            "On their last Friday together, Paolo handed her a notebook filled with reminders, jokes, and encouragement. She gave him a letter in return. They did not promise that nothing would change; they promised to remember what had mattered."
        ]
    },
    {
        id: 28, title: "Voiceless",
        author: "HaveYouSeenThisGirl", genre: "Drama",
        synopsis: "A young person searches for a way to be heard in a world that rarely stops to listen.",
        chapter: "The Words I Kept",
        paragraphs: [
            "Noah had plenty to say, but every time the classroom turned toward him, his voice seemed to disappear. People mistook his silence for indifference. He had almost started believing them.",
            "An art teacher invited the class to express something they could not easily say aloud. Noah filled a page with sketches: a crowded room, a small figure, and a window open to a sky full of birds.",
            "The teacher placed the drawing on the classroom wall. Students stopped to look, and one classmate asked Noah what it meant. He took a breath. This time, the words came slowly, but they came."
        ]
    },
    {
        id: 29, title: "His Secretary",
        author: "whensunnywrites", genre: "Romance",
        synopsis: "A professional relationship becomes complicated when two people begin seeing each other differently.",
        chapter: "Beyond the Office Door",
        paragraphs: [
            "Mara knew her employer's schedule better than her own. She remembered every meeting, every deadline, and the exact coffee he ordered on difficult mornings. Their relationship had always been professional, at least on paper.",
            "When a family emergency disrupted his carefully planned week, Mara helped him rearrange his commitments without asking for anything in return. For the first time, he thanked her not as his secretary but as the person who had made a difficult day manageable.",
            "The following morning, he left a note beside her coffee: Thank you for seeing the person behind the calendar. Mara smiled, then immediately reminded herself that office rules existed for a reason."
        ]
    },
    {
        id: 30, title: "His Secret Wife",
        author: "nininininaaa", genre: "Romance",
        synopsis: "A hidden marriage tests trust, loyalty, and the difference between a secret and a lie.",
        chapter: "The Truth Behind the Photograph",
        paragraphs: [
            "A photograph appeared online showing her husband beside a woman she had never met. The caption was harmless, but the comments were not. By breakfast, Elena had read enough speculation to make her hands cold.",
            "When he came home, she did not shout. She placed the photograph on the table and asked him to explain. For once, his usual confidence disappeared. He admitted that he had hidden details about his work and the people around him because he thought silence would protect her.",
            "Elena told him that protection without honesty was another kind of loneliness. They sat together until the night grew quiet, beginning a conversation that should have happened long before the photograph appeared."
        ]
    }
];

const STORAGE = {
    library: "kandilunan-library-v2",
    liked: "kandilunan-liked-v2",
    theme: "kandilunan-theme-v2",
    progress: "kandilunan-progress-v2"
};

function readStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : JSON.parse(value);
    } catch {
        return fallback;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch {
        return false;
    }
}

function readIds(key) {
    const ids = readStorage(key, []);
    return Array.isArray(ids) ? ids.map(Number) : [];
}

function toggleId(key, id) {
    const ids = readIds(key);
    const updated = ids.includes(Number(id))
        ? ids.filter(item => item !== Number(id))
        : [...ids, Number(id)];

    return writeStorage(key, updated);
}

function hasId(key, id) {
    return readIds(key).includes(Number(id));
}

function getBook(id) {
    return books.find(book => book.id === Number(id));
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

const genreColors = {
    "Romance": ["#8e4356", "#f1b9a8"],
    "Teen Fiction": ["#426b88", "#d2e7ed"],
    "Historical Fiction": ["#77523a", "#ead3a2"],
    "Drama": ["#56536f", "#d4c8df"],
    "Romantic Comedy": ["#b65c78", "#ffdfba"],
    "Horror": ["#24272b", "#9c665b"]
};

function coverSVG(book, scene = 0) {
    const colors = genreColors[book.genre] || ["#77523a", "#ead3a2"];
    const title = escapeHTML(book.title);
    const genre = escapeHTML(book.genre);
    const words = title.split(" ");
    const lines = [];
    let line = "";

    for (const word of words) {
        if ((line + " " + word).trim().length > 19) {
            lines.push(line);
            line = word;
        } else {
            line = (line + " " + word).trim();
        }
    }
    if (line) lines.push(line);

    const titleSVG = lines.slice(0, 5).map((item, index) =>
        `<text x="40" y="${270 + index * 42}" font-size="30" font-weight="bold">${item}</text>`
    ).join("");

    const shapes = scene % 3 === 0
        ? '<circle cx="310" cy="110" r="80" fill="#ffffff" opacity=".14"/><path d="M0 420 Q180 280 360 420 T720 420 V600 H0Z" fill="#ffffff" opacity=".10"/>'
        : scene % 3 === 1
        ? '<path d="M0 60 L360 260 L0 450Z" fill="#ffffff" opacity=".12"/><circle cx="290" cy="420" r="100" fill="#ffffff" opacity=".12"/>'
        : '<circle cx="80" cy="110" r="45" fill="#ffffff" opacity=".12"/><circle cx="320" cy="470" r="130" fill="#ffffff" opacity=".09"/>';

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="360" height="480" viewBox="0 0 360 480">
            <rect width="360" height="480" fill="${colors[0]}"/>
            ${shapes}
            <rect x="18" y="18" width="324" height="444" rx="12" fill="none" stroke="${colors[1]}" stroke-opacity=".65"/>
            <text x="40" y="72" font-family="Georgia,serif" font-size="15" fill="${colors[1]}" letter-spacing="3">KANDILUNAN</text>
            <path d="M40 95 H100" stroke="${colors[1]}" stroke-width="2"/>
            <g font-family="Georgia,serif" fill="#ffffff">${titleSVG}</g>
            <text x="40" y="440" font-family="Arial,sans-serif" font-size="13" fill="${colors[1]}" letter-spacing="2">${genre.toUpperCase()}</text>
        </svg>`;

    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function imagePath(id, number = 0) {
    return number === 0
        ? `images/book${id}.jpg`
        : `images/book${id}-${number}.jpg`;
}

function imageElement(book, className = "story-cover", number = 0) {
    const img = document.createElement("img");
    img.className = className;
    img.src = imagePath(book.id, number);
    img.alt = number === 0
        ? `Cover of ${book.title}`
        : `Illustration ${number} for ${book.title}`;
    img.loading = "lazy";

    img.addEventListener("error", () => {
        if (img.dataset.fallback === "true") return;
        img.dataset.fallback = "true";
        img.src = coverSVG(book, number);
    }, { once: true });

    return img;
}

function applyTheme() {
    const dark = readStorage(STORAGE.theme, "light") === "dark";
    document.body.classList.toggle("dark-mode", dark);

    const button = document.getElementById("themeToggle");
    if (button) {
        button.textContent = dark ? "☀️" : "🌙";
        button.setAttribute(
            "aria-label",
            dark ? "Switch to light mode" : "Switch to dark mode"
        );
        button.title = dark ? "Switch to light mode" : "Switch to dark mode";
    }
}

function toggleTheme() {
    const dark = document.body.classList.contains("dark-mode");
    const next = dark ? "light" : "dark";

    if (!writeStorage(STORAGE.theme, next)) {
        alert("Your browser could not save the theme preference.");
    }

    applyTheme();
}

function makeButton(text, className, action, id, pressed = null) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.textContent = text;
    button.dataset.action = action;
    button.dataset.id = id;

    if (pressed !== null) {
        button.setAttribute("aria-pressed", String(pressed));
    }
    return button;
}

function createCard(book, libraryPage = false) {
    const card = document.createElement("article");
    card.className = "story-card";

    const coverLink = document.createElement("a");
    coverLink.className = "cover-link";
    coverLink.href = `story.html?id=${book.id}`;
    coverLink.setAttribute("aria-label", `Read ${book.title}`);
    coverLink.appendChild(imageElement(book));
    card.appendChild(coverLink);

    const genre = document.createElement("span");
    genre.className = "genre-tag";
    genre.textContent = book.genre;
    card.appendChild(genre);

    const heading = document.createElement("h3");
    const titleLink = document.createElement("a");
    titleLink.href = `story.html?id=${book.id}`;
    titleLink.textContent = book.title;
    heading.appendChild(titleLink);
    card.appendChild(heading);

    const author = document.createElement("p");
    author.className = "story-author";
    author.textContent = `By ${book.author}`;
    card.appendChild(author);

    const synopsis = document.createElement("p");
    synopsis.className = "story-synopsis collapsed";
    synopsis.textContent = book.synopsis;
    synopsis.id = `synopsis-${book.id}`;
    card.appendChild(synopsis);

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const readLink = document.createElement("a");
    readLink.className = "read-button";
    readLink.href = `story.html?id=${book.id}`;
    readLink.textContent = "Read Story";
    actions.appendChild(readLink);

    const synopsisButton = makeButton(
        "Show synopsis", "secondary-button", "synopsis", book.id
    );
    synopsisButton.setAttribute("aria-expanded", "false");
    synopsisButton.setAttribute("aria-controls", synopsis.id);
    actions.appendChild(synopsisButton);

    if (libraryPage) {
        actions.appendChild(makeButton(
            "Book details", "secondary-button", "details", book.id
        ));
        actions.appendChild(makeButton(
            "Remove from Library", "secondary-button", "remove", book.id
        ));
    } else {
        const liked = hasId(STORAGE.liked, book.id);
        const likeButton = makeButton(
            liked ? "♥ Liked" : "♡ Like",
            `secondary-button like-button${liked ? " is-active" : ""}`,
            "like", book.id, liked
        );
        actions.appendChild(likeButton);

        actions.appendChild(makeButton(
            hasId(STORAGE.library, book.id) ? "✓ In My Library" : "+ My Library",
            "secondary-button", "library", book.id
        ));

        actions.appendChild(makeButton(
            "Book details", "secondary-button", "details", book.id
        ));
    }

    card.appendChild(actions);
    return card;
}

function renderBooks() {
    const grid = document.getElementById("storyGrid");
    if (!grid) return;

    const libraryPage = location.pathname.toLowerCase().endsWith("library.html");
    const searchInput = document.getElementById("searchInput");
    const genreFilter = document.getElementById("genreFilter");

    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const genre = genreFilter ? genreFilter.value : "all";
    const libraryIds = readIds(STORAGE.library);

    const visible = books.filter(book => {
        const searchable = `${book.title} ${book.author} ${book.genre} ${book.synopsis}`
            .toLowerCase();

        return searchable.includes(query)
            && (genre === "all" || book.genre === genre)
            && (!libraryPage || libraryIds.includes(book.id));
    });

    grid.replaceChildren();
    visible.forEach(book => grid.appendChild(createCard(book, libraryPage)));

    const count = document.getElementById("resultCount");
    if (count) {
        count.textContent = libraryPage
            ? `${visible.length} saved ${visible.length === 1 ? "story" : "stories"}`
            : `Showing ${visible.length} of ${books.length} stories`;
    }

    const empty = document.getElementById("emptyMessage");
    if (empty) empty.hidden = visible.length !== 0;
}

function populateGenres() {
    const filter = document.getElementById("genreFilter");
    if (!filter) return;

    const genres = [...new Set(books.map(book => book.genre))].sort();

    genres.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre;
        option.textContent = genre;
        filter.appendChild(option);
    });
}

function showBookDetails(book) {
    const dialog = document.getElementById("bookDialog");
    const content = document.getElementById("dialogContent");
    if (!dialog || !content) return;

    content.replaceChildren();

    const cover = imageElement(book, "dialog-book-cover");
    cover.loading = "eager";
    content.appendChild(cover);

    const genre = document.createElement("p");
    genre.className = "eyebrow";
    genre.textContent = book.genre.toUpperCase();
    content.appendChild(genre);

    const heading = document.createElement("h2");
    heading.textContent = book.title;
    content.appendChild(heading);

    const author = document.createElement("p");
    author.className = "muted";
    author.textContent = `Written by ${book.author}`;
    content.appendChild(author);

    const synopsisHeading = document.createElement("h3");
    synopsisHeading.textContent = "Synopsis";
    content.appendChild(synopsisHeading);

    const synopsis = document.createElement("p");
    synopsis.className = "dialog-synopsis";
    synopsis.textContent = book.synopsis;
    content.appendChild(synopsis);

    const chapter = document.createElement("p");
    chapter.innerHTML = "<strong>Chapter 1:</strong> " + escapeHTML(book.chapter);
    content.appendChild(chapter);

    const link = document.createElement("a");
    link.className = "primary-button";
    link.href = `story.html?id=${book.id}`;
    link.textContent = "Read Story →";
    content.appendChild(link);

    if (typeof dialog.showModal === "function") {
        dialog.showModal();
    } else {
        alert(`${book.title}\nBy ${book.author}\n\n${book.synopsis}`);
    }
}

function handleGridClick(event) {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const book = getBook(button.dataset.id);
    if (!book) return;

    const action = button.dataset.action;

    if (action === "synopsis") {
        const synopsis = document.getElementById(`synopsis-${book.id}`);
        if (!synopsis) return;

        const expanded = synopsis.classList.toggle("collapsed");
        button.textContent = expanded ? "Show synopsis" : "Hide synopsis";
        button.setAttribute("aria-expanded", String(!expanded));
        return;
    }

    if (action === "details") {
        showBookDetails(book);
        return;
    }

    if (action === "like") {
        if (!toggleId(STORAGE.liked, book.id)) {
            alert("Unable to save your like. Check browser storage.");
        }
        renderBooks();
        return;
    }

    if (action === "library") {
        const wasSaved = hasId(STORAGE.library, book.id);
        if (!toggleId(STORAGE.library, book.id)) {
            alert("Unable to update My Library. Check browser storage.");
        } else if (!wasSaved) {
            announce(`${book.title} added to My Library.`);
        }
        renderBooks();
        return;
    }

    if (action === "remove") {
        const ids = readIds(STORAGE.library).filter(id => id !== book.id);
        if (!writeStorage(STORAGE.library, ids)) {
            alert("Unable to remove the story. Check browser storage.");
        }
        renderBooks();
    }
}

function announce(message) {
    let live = document.getElementById("appAnnouncement");
    if (!live) {
        live = document.createElement("p");
        live.id = "appAnnouncement";
        live.className = "sr-only";
        live.setAttribute("role", "status");
        document.body.appendChild(live);
    }
    live.textContent = message;
}

function resetFilters() {
    const search = document.getElementById("searchInput");
    const genre = document.getElementById("genreFilter");
    if (search) search.value = "";
    if (genre) genre.value = "all";
    renderBooks();
}

let activeBook = null;
let activeSlide = 0;
let slideItems = [];

function renderReader() {
    const details = document.getElementById("storyDetails");
    const panel = document.getElementById("readerPanel");
    if (!details || !panel) return;

    const params = new URLSearchParams(location.search);
    activeBook = getBook(params.get("id"));

    if (!activeBook) {
        details.replaceChildren();

        const heading = document.createElement("h1");
        heading.textContent = "Story not found";
        details.appendChild(heading);

        const message = document.createElement("p");
        message.textContent = "Choose a story from Discover to start reading.";
        details.appendChild(message);

        const link = document.createElement("a");
        link.className = "primary-button";
        link.href = "index.html";
        link.textContent = "Browse Stories";
        details.appendChild(link);

        panel.hidden = true;
        const gallery = document.getElementById("slideshowPanel");
        if (gallery) gallery.hidden = true;
        document.title = "Story Not Found | Kandilunan";
        return;
    }

    document.title = `${activeBook.title} | Kandilunan`;
    details.replaceChildren();

    const layout = document.createElement("section");
    layout.className = "story-details";

    const cover = imageElement(activeBook, "details-cover");
    cover.loading = "eager";

    const coverColumn = document.createElement("div");
    coverColumn.appendChild(cover);
    layout.appendChild(coverColumn);

    const info = document.createElement("div");

    const genre = document.createElement("span");
    genre.className = "genre-tag";
    genre.textContent = activeBook.genre;
    info.appendChild(genre);

    const title = document.createElement("h1");
    title.textContent = activeBook.title;
    info.appendChild(title);

    const author = document.createElement("p");
    author.className = "details-author";
    author.textContent = `By ${activeBook.author}`;
    info.appendChild(author);

    const synopsisHeading = document.createElement("h2");
    synopsisHeading.textContent = "Synopsis";
    info.appendChild(synopsisHeading);

    const synopsis = document.createElement("p");
    synopsis.className = "details-synopsis";
    synopsis.textContent = activeBook.synopsis;
    info.appendChild(synopsis);

    const actions = document.createElement("div");
    actions.className = "details-actions";

    const liked = hasId(STORAGE.liked, activeBook.id);
    actions.appendChild(makeButton(
        liked ? "♥ Liked" : "♡ Like",
        `secondary-button like-button${liked ? " is-active" : ""}`,
        "reader-like", activeBook.id, liked
    ));

    actions.appendChild(makeButton(
        hasId(STORAGE.library, activeBook.id)
            ? "✓ In My Library" : "+ My Library",
        "secondary-button", "reader-library", activeBook.id
    ));

    info.appendChild(actions);
    layout.appendChild(info);
    details.appendChild(layout);

    panel.hidden = false;

    const chapterSelect = document.getElementById("chapterSelect");
    chapterSelect.replaceChildren();

    const option = document.createElement("option");
    option.value = "1";
    option.textContent = `Chapter 1: ${activeBook.chapter}`;
    chapterSelect.appendChild(option);

    document.getElementById("previousChapter").disabled = true;
    document.getElementById("nextChapter").disabled = true;
    document.getElementById("previousChapterBottom").disabled = true;
    document.getElementById("nextChapterBottom").disabled = true;

    const chapterContent = document.getElementById("chapterContent");
    chapterContent.replaceChildren();

    const chapterTitle = document.createElement("h2");
    chapterTitle.textContent = `Chapter 1: ${activeBook.chapter}`;
    chapterContent.appendChild(chapterTitle);

    activeBook.paragraphs.forEach(paragraph => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        chapterContent.appendChild(p);
    });

    const savedProgress = readStorage(STORAGE.progress, {});
    const previousProgress = Number(savedProgress[activeBook.id]) || 0;
    updateProgress(previousProgress);

    const complete = document.getElementById("readingComplete");
    if (complete) complete.hidden = previousProgress < 100;

    setupSlideshow(activeBook);
    window.scrollTo(0, 0);
}

function updateProgress(value) {
    const percent = Math.max(0, Math.min(100, Math.round(value)));
    const fill = document.getElementById("readingProgress");
    const label = document.getElementById("readingPercentage");
    const track = document.getElementById("progressTrack");

    if (fill) fill.style.width = `${percent}%`;
    if (label) label.textContent = `${percent}% read`;
    if (track) track.setAttribute("aria-valuenow", String(percent));

    if (activeBook) {
        const progress = readStorage(STORAGE.progress, {});
        progress[activeBook.id] = percent;
        writeStorage(STORAGE.progress, progress);
    }

    const complete = document.getElementById("readingComplete");
    if (complete) complete.hidden = percent < 100;
}

function calculateReadingProgress() {
    const content = document.getElementById("chapterContent");
    if (!content || !activeBook) return;

    const rect = content.getBoundingClientRect();
    const pageHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
    );
    const maxScroll = pageHeight - window.innerHeight;

    if (maxScroll <= 0) {
        updateProgress(100);
        return;
    }

    const scroll = window.scrollY;
    const percent = Math.round((scroll / maxScroll) * 100);
    updateProgress(percent);
}

function handleReaderAction(event) {
    const button = event.target.closest("button[data-action]");
    if (!button || !activeBook) return;

    const action = button.dataset.action;

    if (action === "reader-like") {
        toggleId(STORAGE.liked, activeBook.id);
        renderReader();
    } else if (action === "reader-library") {
        toggleId(STORAGE.library, activeBook.id);
        renderReader();
    }
}

function setupSlideshow(book) {
    const panel = document.getElementById("slideshowPanel");
    if (!panel) return;

    panel.hidden = false;
    activeSlide = 0;

    slideItems = [
        { src: imagePath(book.id, 1), caption: "A moment from the story" },
        { src: imagePath(book.id, 2), caption: "Another page of imagination" },
        { src: imagePath(book.id, 0), caption: `Cover: ${book.title}` }
    ];

    renderSlide();
}

function renderSlide() {
    const book = activeBook;
    if (!book || slideItems.length === 0) return;

    const item = slideItems[activeSlide];
    const img = document.getElementById("slideImage");
    const caption = document.getElementById("slideCaption");
    const counter = document.getElementById("slideCounter");
    const dots = document.getElementById("slideDots");

    img.dataset.fallback = "false";
    img.src = item.src;
    img.alt = `${book.title}: ${item.caption}`;

    img.onerror = () => {
        if (img.dataset.fallback === "true") return;
        img.dataset.fallback = "true";
        img.src = coverSVG(book, activeSlide);
    };

    caption.textContent = item.caption;
    counter.textContent = `${activeSlide + 1} / ${slideItems.length}`;

    dots.replaceChildren();

    slideItems.forEach((slide, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = `slide-dot${index === activeSlide ? " is-active" : ""}`;
        dot.setAttribute("aria-label", `Show image ${index + 1}`);
        dot.setAttribute("aria-pressed", String(index === activeSlide));
        dot.addEventListener("click", () => {
            activeSlide = index;
            renderSlide();
        });
        dots.appendChild(dot);
    });
}

function changeSlide(direction) {
    if (!slideItems.length) return;
    activeSlide = (activeSlide + direction + slideItems.length) % slideItems.length;
    renderSlide();
}

function setupApp() {
    applyTheme();

    document.getElementById("themeToggle")
        ?.addEventListener("click", toggleTheme);

    const searchForm = document.getElementById("searchForm");
    searchForm?.addEventListener("submit", event => {
        event.preventDefault();
        renderBooks();
        document.getElementById("stories")?.scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("searchInput")
        ?.addEventListener("input", renderBooks);

    populateGenres();

    document.getElementById("genreFilter")
        ?.addEventListener("change", renderBooks);

    document.getElementById("clearFilters")
        ?.addEventListener("click", resetFilters);

    document.getElementById("resetSearch")
        ?.addEventListener("click", resetFilters);

    document.getElementById("storyGrid")
        ?.addEventListener("click", handleGridClick);

    document.getElementById("storyDetails")
        ?.addEventListener("click", handleReaderAction);

    document.getElementById("closeDialog")
        ?.addEventListener("click", () => {
            document.getElementById("bookDialog")?.close();
        });

    document.getElementById("bookDialog")
        ?.addEventListener("click", event => {
            const dialog = event.currentTarget;
            if (event.target === dialog) dialog.close();
        });

    document.getElementById("chapterSelect")
        ?.addEventListener("change", () => {
            if (activeBook) renderReader();
        });

    document.getElementById("previousSlide")
        ?.addEventListener("click", () => changeSlide(-1));

    document.getElementById("nextSlide")
        ?.addEventListener("click", () => changeSlide(1));

    window.addEventListener("scroll", calculateReadingProgress, { passive: true });
    window.addEventListener("resize", calculateReadingProgress);

    renderBooks();
    renderReader();

    if ("serviceWorker" in navigator && location.protocol !== "file:") {
        navigator.serviceWorker.register("./sw.js")
            .catch(error => console.warn("Offline caching unavailable:", error));
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupApp, { once: true });
} else {
    setupApp();
}
