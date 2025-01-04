import React from "react";

const commentsData = [
  {
    name: "salik nisar  beigh",
    text: "Comment: This is such an insightful discussion!",
    replies: [
      {
        name: "Exodus",
        text: "Comment: I completely agree with the points raised here.",
        replies: [
          {
            name: "fake  ",
            text: "Comment: Can someone elaborate on this further?",
            replies: [
              {
                name: "unknown",
                text: "Comment: I’m not sure I understand the argument here.",
                replies: [
                  {
                    name: "Strike",
                    text: "Comment: Fantastic read! Thanks for sharing.",
                    replies: [
                      {
                        name: "Exo",
                        text: "Comment: Let’s dive deeper into the topic.",
                        replies: [{
                          name: "User",
                          text: "Comment: I have a slightly different perspective on this.",
                          replies: [],
                        },],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "salik nisar  beigh",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "salik nisar  beigh",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },

];


const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-Sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="h-8 px-3"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      ></img>
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text 2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
