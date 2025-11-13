import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
    
const Card = () => {
    return (
        <div className={styles.container}>
          <div className={styles.imageContainer}>
                    <Image
                        src="/travel1.jpg"
                        alt="Travel"
                        fill
                        className={styles.image} 
                    />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.detail}>
                        <span className={styles.date}>11.03.2023 - </span>
                        <span className={styles.category}>Travel</span>
                    </div>
                    <a href="/"><h1> Wanderlust Awakens – Why Travel Transforms Us
</h1></a>
                    
<linebreak />
                    <p>Travel isn’t just about ticking off places on a map—it’s about awakening something inside us. When we journey to a new destination, we step out of our routines and comfort zones, we see different ways of life, and we begin to understand ourselves differently too.</p>
<p>
Take for example a trip to Thailand: the buzz of Bangkok, the tranquility of Chiang Mai, the beaches of Phuket. The unfamiliar smells, sounds, and faces stir your senses. One moment you’re immersed in a temple’s stillness; the next you’re navigating a street food market at twilight. That contrast reminds you how alive you are.
</p><p>
Travel opens us to perspective. When we meet people whose lives are unlike ours—people who live lightly, deeply, simply—our problems often shrink in scale. Seeing a sunrise over a mountain, feeling the spray from the sea, sharing laughter with locals—all these moments become reminders: life is bigger than one city, one story.
</p><p>
And travel gives us memory anchors. Years later you’ll remember walking barefoot on sand, tasting mango under a mango tree, or speaking (with hand signals) when English didn’t suffice. These become part of you.
</p><p>
If you’re planning your next escape, ask yourself: What do I want to feel? What shift do I hope to bring back? Because travel isn’t just a break, it’s a bridge—from the person you are now to a person with wider horizons, deeper gratitude, and more stories.
</p>
<Link href="/blog?cat=travel" passHref>
    <button className={styles.categoryButton}>
      Go to Travel Blog
    </button>
  </Link>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.imageContainer}>
                    <Image
                        src="/fashion one.jpg"
                        alt="Travel"
                        fill
                        className={styles.image} 
                    />
                </div>
                    <div className={styles.detail}>
                        <span className={styles.date}>11.03.2023 - </span>
                        <span className={styles.category}>Fashion</span>
                    </div>
                    <a href="/"><h1> Fashion as Self-Expression — Wearing Confidence, Not Just Clothes

</h1></a>
<linebreak /><p>
                    Fashion isn’t just about trends, it’s about storytelling. Every outfit we wear says something about who we are, how we feel, and how we see the world. From the colour of our shoes to the texture of our jacket, fashion becomes a silent language helping us express what words sometimes cannot.
</p>
<p>
In a world that often tells us to “fit in”, style gives us  the courage to stand out. It’s less about expensive brands and more about confidence — the quiet kind that shines when you wear something that feels authentically you. Whether it’s a crisp white shirt, a flowy skirt, or your favourite pair of sneakers, what matters most is how you carry yourself.
</p><p>
The beauty of fashion lies in its freedom — there’s no single rule-book, no one-size-fits-all. You can reinvent yourself every day — bohemian one morning, minimalist the next. It’s living art. And just like art, it evolves with time, reflecting your growth, moods, and beliefs.
</p><p>
One of the biggest shifts we’re seeing now is sustainability. More people are choosing to shop consciously — invest in quality, support local designers, give new life to vintage pieces. True style isn’t fast; it’s timeless.
</p><p>
So next time you get dressed, don’t think only about what’s “in”. Think about what’s you. Let your clothes tell your story — stitched with confidence, individuality, and self-love.

</p>
<Link href="/blog?cat=techology" passHref>
    <button className={styles.categoryButton}>
      Go to Travel Blog
    </button>
  </Link>
                </div>
                 <div className={styles.textContainer}>
                    <div className={styles.imageContainer}>
                    <Image
                        src="/technology1.jpg"
                        alt="Travel"
                        fill
                        className={styles.image} 
                    />
                </div>
                    <div className={styles.detail}>
                        <span className={styles.date}>11.03.2023 - </span>
                        <span className={styles.category}>Technology</span>
                        <img src="/technology two.jpg" alt="" width={16} height={16} className={styles.icon} />
                    </div>
                    <a href="/"><h1> The Top Tech Trends Shaping Our Future

</h1></a>
                    
<linebreak /><p>
                    In a world where change is the only constant, staying ahead of emerging technologies isn’t optional — it’s necessary. The things that were cutting-edge five years ago are now commonplace, and what’s trending today might become outdated by tomorrow. In this post, we dive into some of the most important tech trends that are shaping our future, and consider how they might change how we live, work, and play.

</p>
<p>
One major trend is artificial intelligence (AI) and its proliferation into everyday tools — not just in labs or big tech, but in our phones, cars, homes and workplaces. AI now powers voice assistants, recommendation engines, fraud detection systems, and much more. As the video above highlights, many of the technologies that will “decide who rules the world” involve AI, machine-learning, automation and data.

</p><p>

Another trend is the edge between connectivity and devices — think 5G/6G, Internet of Things (IoT), smart sensors, and real-time data processing. When devices connect and communicate seamlessly, whole new possibilities emerge for smart cities, autonomous transport, and intelligent infrastructure.

</p><p>
Sustainability and clean tech are also rapidly moving from niche to mainstream. Tech innovation is no longer just about speed and novelty; it’s about energy efficiency, recycling materials, and reducing carbon footprints. Innovations like better battery storage, greener computing, and smart grids are part of this shift.

</p><p>
For you, the reader, the takeaway is clear: Rather than being a passive consumer of technology, you can choose to be informed and adaptive. Ask yourself — how will I use the tech coming my way? Will I let it shape me, or will I shape how I use it?


</p>

<Link href="/blog?cat=travel" passHref>
    <button className={styles.categoryButton}>
      Go to Travel Blog
    </button>
  </Link>
                </div>
                
        </div>
    )
}

export default Card;