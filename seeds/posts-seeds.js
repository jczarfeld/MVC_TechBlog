const { Post } = require('../models');

const postData = [
    {
        title: "Rick Barry was right!",
        post_content: "Rick Barry was one of the best big-man free throw shooters in the history of basketball. He had the guts to shoot the ball underhanded in front of a crowd of live people. He was wrong about other things though.",
        user_id: 1
    },
    {
        title: "This just in!",
        post_content: "Breaking news is unfolding right before us as we continue to learn more details on this continuously surprising story as it develops. More at 11",
        user_id: 2
    },
    {
        title: "Awards buzz already?",
        post_content: "A small and seemingly unoriginal tech blog has been dominating the internet underground for weeks now. The question isn't whether or not it will win the blogboy award this year, the question is is this eligible for a daytime emmy if people look at it enough?",
        user_id: 3

    },
    {
        title: "Man with two heads",
        post_content: "Throughout the small town of Washington, Oregon, everyone knows the man with two heads. His name is Jack and he was born with the unfortunate condition of having a dead fetus head attached to his upper back, or at least that's what he's told everybody. Jack has never shown anyone the second head, even though he relies on their donations to stay unemployed. Jack was lying.",
        user_id: 4
    },
    {
        title: "The Great Escape!",
        post_content: "Three apes and innumerable birds have escaped the local Zoo last evening. There are reports of a suspected conspiracy. One of the zookeepes spoke to us earlier and says although she doesn't know who the mastermind was, she is certain that months of planning went into the perfect escape. She has asked to reamin anonymous.",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;