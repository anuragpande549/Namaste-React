const useComment = () => {
    function getRandomComment() {
        const comments = [
            "This is awesome!", "I totally agree!", "What a great point!", "Can someone explain this?", "Loving this stream!", "Haha, that's funny!", "Great content, keep it up!", "Wow, impressive!", "Thank you for this!", "I'm learning so much!", "Could you elaborate more on this?", "This is my favorite part!", "What do you think about...", "That's an interesting perspective!", "Can't wait for more!", "This is really helpful!", "Amazing work!", "I never thought of it that way!", "This made my day!", "Could you show more examples?", "I'm so glad I tuned in!", "This is gold!", "You've got a new subscriber!", "Can we get more content like this?", "This is exactly what I needed!", "Phenomenal explanation!", "The quality of this content is top-notch!", "Such a detailed breakdown!", "You make it look so easy!", "Keep the great content coming!", "This really cleared things up for me!", "Can you provide more details on this topic?", "This was very informative!", "The visuals are stunning!", "Can you dive deeper into this subject?", "Your enthusiasm is contagious!", "This is why I love this channel!", "Every video gets better!", "Such a unique take on this!", "I appreciate all the hard work you put into this!"
        ];

        const randomIndex = Math.floor(Math.random() * comments.length);
        return comments[randomIndex];
    }

    return getRandomComment()

}

export default useComment;