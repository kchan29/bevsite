import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface MessageProps {
  name: string;
  content: string;
  image: string;
}

const messages: MessageProps[] = [
  {
    name: "Aashna",
    content: `dear bianca, 

wishing you the best 20th ever!! we met when we were little naive 18-year olds and now we’re both 20 that’s actually crazy. it feels like just yesterday we were coming to berkeley for the first time and somehow i was lucky enough to have met you as my first friend in college. from the beginning, i was drawn to you because there was something about you that made me feel so safe. i immediately felt that i could tell you anything and you wouldn’t judge me. you became a constant, reliable support system and one of my biggest comforts throughout college. being your roommate was such a special part of my college experience and i’m so lucky that we somehow ended up as random roomies. 

we’ve shared so so many fun memories together. there’s too many to put into words, but i can try.  forcing ourselves to tolerate clark kerr food but ending up making noodles (indome and maggi>>). dressing up as white/black swan and ravenclaw/hufflepuff, then realizing how good shein is (which didn’t help our already horrible self control when it comes to shopping). buying an unhealthy amount of cal jackets… watching things together (can’t believe we lasted through an entire season of xo kitty in one sitting). going to our first frat (and leaving after 15 mins). you in your oski obsession era. having lots of sidequests in singapore together (lots of shopping, drinking, and digicam pics)!

we’ve also had the most unhinged, niche conversations that somehow always made sense to us. we shared clothes like sisters. decorated our walls together, which each represented our personalities and vibes perfectly. enduring the berkeley rain together so so many times after locking in at philz. sharing some iconic places near both cupertino and monterey park (i still remember your absolute joy at experiencing santana row’s miniso for the first time). experiencing laufey in person together after failing to get tickets so many times in philz. 

you’ve introduced me to so many beautiful things. so many songs! (our sabrina carpenter/laufey/niki era was so iconic). indome and djungelskog (which changed my life). took me to super fun places near your home (old town pasadena, those malls, and the best street tacos with hunter and kyle lol).

but more than all of that, i want to thank you for the way you’ve always been there for me (literally since day one). although freshman year as the only 2 pocs in clark kerr (only slight exaggeration) was definitely… an experience? i felt assured that i always had you as a good friend, which felt really reassuring especially because we both highkey didn’t vibe with half of berkeley for at least a semester. i always felt that i could turn to you for the best advice. you have a rare ability to make a space where people can be completely themselves, and that’s something i cherish so much about you. you have a beautiful sense of generosity and have always done little actions to show me that you care about me (i’ve had so many of your snacks your the snackpile lol). 

thank you for being such a genuinely beautiful and inspirational person. for your unconditional loyalty, for bringing fresh perspectives into my (bay area brainwashed) mind, and for always being open to experiencing new things together. i love how we can do the most spontaneous, random things and still have the best time. your work ethic, resilience, and pure, genuine heart inspire me so much, and i’m so lucky to have you in my life. 

i love you so much and i can’t wait to see what new adventures you experiences in your 20’s! hope to celebrate many many more milestones and birthdays together (21 coming soon?)`,
    image: "/images/Aashna.JPG"
  },
  {
    name: "Kyle",
    content: `Hiya, this is Kyle. Ur old now. Thanks for always being there when I have needed you, especially when I haven't been the easiest person to deal with. I look forward to us continuing our years of comradery that will likely last for our lives, whether we like it or not. I firmly believe that your efforts will allow you to accomplish great things in life. May you live long and prosper, and I hope that you will continue taking in the sheets. Guy, Kyle \n \n \n \n \n \n`,
    image: "/images/Kyle.JPG"
  },
  {
    name: "Hunter",
    content: `hey bianca happy 20th old bitch. youre always slaying the house the boots the house the boots down. It's truly been a joy watching you grow as a person especially in college. I'm happiest knowing that you are happy and seeing you accomplish things you've always wanted like finding research and presenting at the owl abusers. Aside from your academics, I loved seeing you grow as a person and become more confident in yourself and growing to be less pretentious — something I've learned from you. You've always been my number one role model and someone I go to for advice and feels like having an older sister. 
    You've always been the first one to take steps I couldn't see myself taking before like applying to opportunities, having a taste in music, dating, ordering food, asking for a restaurant's restroom key, finding research, speaking to teachers and profs, leading clubs, staying connected w/ old friends, being confrontational and the list goes on and on. It truly never feels like I have to do anything alone, since you've done it before and I know I can always reach out for help. In this past year alone you've helped me get through my mother's cancer diagnosis, inspired me in balancing job w/ school, provided your home as a place for the fires, and slowly supported my journey in embracing my identity as a gay fag — experiences I will never forget (I'm getting good at these emdashes eat it wanna be english major). I also see how much you care for others and try to mimic a fraction of that empathy and hope you treat yourself as well as you treat others. There's so much more I'd like to say but I'm too lazy. I'm eternally grateful to have met you in Carmona's class and am excited to see you grow as a person and be there with you. "I hope you're happy." HAGS old hag.`,
    image: "/images/Hunter.JPG"
  },
  {
    name: "Wei",
    content: `bianca!!!! happy birthday!!!! even though we've only known each other for like a year(?), it's one of the best things that's happened to me. i don't know how else to say it, but the weekends we spent locking in over monster and analyzing cat behavior feel intangibly significant, somehow, like they'll become nostalgic in the next ten years after graduation is over and our lives are totally different….
your dry delivery and wicked smarts are eternally impressive, and i hope that this year you're able to fully acknowledge your capabilities, even if you feel like an outsider or like you have nothing to offer. self-assurance is a tall order and certainly isn't happening for me any time soon, but i know you get it. i'm positive you've already got many opportunities lined up, so i'm praying this year will grant you a little respite because underneath all that brutal efficiency, there's a person who needs rest too.
i love you!!!! give circe a treat for me (or don't if she's getting too pear shaped)`,
    image: "/images/Wei.jpg"
  },
  {
    name: "Kiana",
    content: `Happy birthday Bianca! I know you still overthink as much as ever, but it's good to see you happier than before. It's been an eventful 6 years or so that I've known you, but I hope we will be there for each other for even longer🤙`,
    image: "/images/Kiana.JPG"
  },
  {
    name: "Karen",
    content: `BIANCA!

I’m gonna start this off with a (very late) happy birthday—happy 20th! I hope this year brings you everything you’re hoping for and more.

I feel like I don’t say this enough, but you’re genuinely one of the people I look up to the most. I hope someday I can be as good as you at putting thoughts into words, but for now, this will have to do LOL. I could say we go way back and talk about high school to now progression, but I feel like our friendship became something different once college started. Maybe it’s just that we’ve had more chances to talk and spend time together, but I also feel like I’ve gotten to know you in a different way and I cherish our friendship now more than ever :3

Every conversation we have makes me thinking about something new. You just know so much about so many random, interesting things, and you always have something insightful to say. Please don’t ever stop yapping. 

You’re honestly one of the most intelligent people I know, and that says a lot, because I know a lot of people. But what makes you stand out to me isn’t just how smart you are (but like highest score in 150A is lowkey very insane), it’s the way you pair it with your level of discipline and work ethic. You do so much, and yet you complain so little. I’m like.. world’s biggest complainer (as you know) so it blows my mind how you’re manage to balance everything while still staying grounded and thoughtful. You’re one of the very rare people who actually does what they say they will and you do it well, without needing to make a show of it.

You care so much about the people around you, and I don’t think we tell you that enough, and I don’t think you realize how important you are :> You remember the little things about people, you stand up for the people you care about, even when it’s hard, and you’re always so intentional with the way you support others.

This is starting to sound like a love letter and it’s grossing me out so im going to stop here but I love that you’re really true to yourself. You don’t pretend to have everything figured out (even though you probably do more than most of us lol), but you think through things so carefully. You always manage to find the most rational, grounded path forward, even when you're extremely stressed, unsure, or even straight up just crashing out. And you never let go of your values or your sense of what’s right. You’re a genuinely good person, and I hope you know how rare and admirable that is :D I’m very happy and proud that I’m able to call you one of my closest friends.

To years more of Korean food, “Karen I am ____” text messages, and being nosy yappers!!

Love you,
Karennnnn
`,
    image: "/images/Karen.JPG"
  },
  {
    name: "Kevin",
    content: "I made this website for you because even though not all your friends could celebrate your birthday in person with you, I wanted to still give you the feeling of friendship and support that people should have on their birthdays. We all care about you very much and love the person you’ve become, and the people you’ve helped us become. Each of us in our own ways owes so much to you. The effort, love, and time you spend each day, for the people. We see you. \n\n I could say a million things to you in this note that I appreciate and cherish you for. Big things like how you tell me to chase after my dreams, and give me something in the future to look forward to, to small things like the way your eyes dance around when you talk to me, your sibilant voice, and the way you recognise qualities in myself that nobody else does. You mean the world to me and you make me strive to be a kinder person each day. \n\n It’s so weird to me that a person could take up so much space in my life, and be so present in every move, thought, and interaction in my life. When I think of you I see my future, my heart, my rock solid foundation. I love your laugh, the way you curl your lips to make expressions, your one-off statements about random things that make my day. I am so lucky to have such a phenomenal consultant, emotional pillar, advocate, friend, partner, and everything else you are kind and patient enough to always do your best for me. I don’t know what I did to deserve this. Not just me, but the things you do for everyone else in your life, whether they are mentioned here or not, do not go unnoticed. They’re certainly not meaningless. They make all the difference. The world would not be the same place without you. Happy birthday.",
    image: "/images/Kevin.JPG"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen confetti-bg py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16 py-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 section-header">
            Happy 20th Birthday, Bianca!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A collection of birthday wishes from your friends who love you dearly.
          </p>
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-300 to-violet-400 blur-2xl opacity-30" />
            <div className="relative flex items-center justify-center w-full h-full">
              <svg className="w-full h-full text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </header>

        {/* Messages Section */}
        <div className="grid grid-cols-1 gap-10 mb-20">
          {messages.map((message, index) => (
            <Card key={message.name} className={`message-card overflow-hidden border-2 ${index % 2 === 0 ? 'border-violet-200' : 'border-purple-200'}`}>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  {/* For even indices, show image on the left */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="md:col-span-4 h-80 md:h-auto relative photo-container overflow-hidden">
                        <Image
                          src={message.image}
                          alt={`${message.name} and Bianca`}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="md:col-span-8 p-6 md:p-8 flex flex-col">
                        <h3 className="text-xl md:text-2xl font-bold mb-1 text-primary">From {message.name}</h3>
                        <div className="mt-3 text-sm md:text-base space-y-4 whitespace-pre-line">
                          {message.content}
                        </div>
                      </div>
                    </>
                  ) : (
                    /* For odd indices, show image on the right */
                    <>
                      <div className="md:col-span-8 p-6 md:p-8 flex flex-col">
                        <h3 className="text-xl md:text-2xl font-bold mb-1 text-primary">From {message.name}</h3>
                        <div className="mt-3 text-sm md:text-base space-y-4 whitespace-pre-line">
                          {message.content}
                        </div>
                      </div>
                      <div className="md:col-span-4 h-80 md:h-auto relative photo-container overflow-hidden">
                        <Image
                          src={message.image}
                          alt={`${message.name} and Bianca`}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center pt-10 pb-20">
          <h2 className="text-3xl font-bold mb-6 section-header">Cheers to your 20s!</h2>
          <p className="text-muted-foreground">
            Wishing you a wonderful birthday and an amazing year ahead.
          </p>
        </footer>
      </div>
    </main>
  );
}
