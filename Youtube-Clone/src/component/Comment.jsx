import React from 'react'
import accountIcone from "../assets/account.png"
let commentData =  [
      {
        "id": 1,
        "author": "John Doe",
        "text": "This is a great post! Thanks for sharing.",
        "timestamp": "2024-11-22T10:00:00Z",
        "replies": [
          {
            "id": 2,
            "author": "Jane Smith",
            "text": "I agree with you, John. Really insightful!",
            "timestamp": "2024-11-22T10:15:00Z",
            "replies": [
              {
                "id": 3,
                "author": "Alex Johnson",
                "text": "True, but I think it could have included more examples.",
                "timestamp": "2024-11-22T10:20:00Z",
                "replies": [
                  {
                    "id": 4,
                    "author": "Emily Clark",
                    "text": "More examples would definitely help clarify the points.",
                    "timestamp": "2024-11-22T10:25:00Z",
                    "replies": [
                      {
                        "id": 5,
                        "author": "John Doe",
                        "text": "Great suggestion, Emily. I’ll try to include examples next time.",
                        "timestamp": "2024-11-22T10:30:00Z",
                        "replies": []
                      }
                    ]
                  },
                  {
                    "id": 6,
                    "author": "Jane Smith",
                    "text": "Examples aside, the overall structure was well-organized.",
                    "timestamp": "2024-11-22T10:35:00Z",
                    "replies": []
                  }
                ]
              },
              {
                "id": 7,
                "author": "Chris Evans",
                "text": "I think it depends on the target audience. Beginners might find it helpful even without examples.",
                "timestamp": "2024-11-22T10:40:00Z",
                "replies": []
              }
            ]
          },
          {
            "id": 8,
            "author": "Sophia Lee",
            "text": "Does anyone know where I can find more resources on this topic?",
            "timestamp": "2024-11-22T10:50:00Z",
            "replies": [
              {
                "id": 9,
                "author": "John Doe",
                "text": "Check the links at the end of the post. They’re quite helpful!",
                "timestamp": "2024-11-22T10:55:00Z",
                "replies": []
              },
              {
                "id": 10,
                "author": "Emma Wilson",
                "text": "Sophia, I recommend also checking out tutorials on YouTube.",
                "timestamp": "2024-11-22T11:00:00Z",
                "replies": []
              }
            ]
          }
        ]
      },
      {
        "id": 11,
        "author": "Michael Brown",
        "text": "What a detailed write-up! Appreciate the effort put into this.",
        "timestamp": "2024-11-22T11:10:00Z",
        "replies": [
          {
            "id": 12,
            "author": "Laura Green",
            "text": "Agreed! The details are what make this stand out.",
            "timestamp": "2024-11-22T11:15:00Z",
            "replies": [
              {
                "id": 13,
                "author": "David Martinez",
                "text": "I just wish there were some interactive examples.",
                "timestamp": "2024-11-22T11:20:00Z",
                "replies": [
                  {
                    "id": 14,
                    "author": "Sophia Lee",
                    "text": "Interactive examples would indeed make this more engaging.",
                    "timestamp": "2024-11-22T11:25:00Z",
                    "replies": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": 15,
        "author": "Daniel White",
        "text": "Can anyone summarize the key takeaways from this post?",
        "timestamp": "2024-11-22T11:30:00Z",
        "replies": [
          {
            "id": 16,
            "author": "Emma Wilson",
            "text": "Sure, Daniel! The post mainly talks about X, Y, and Z topics in detail.",
            "timestamp": "2024-11-22T11:35:00Z",
            "replies": []
          },
          {
            "id": 17,
            "author": "Michael Brown",
            "text": "Daniel, the TL;DR is that it’s a comprehensive guide for beginners.",
            "timestamp": "2024-11-22T11:40:00Z",
            "replies": []
          }
        ]
      },
      {
        "id": 18,
        "author": "Sophia Lee",
        "text": "Does anyone have additional reading recommendations?",
        "timestamp": "2024-11-22T11:45:00Z",
        "replies": [
          {
            "id": 19,
            "author": "Chris Evans",
            "text": "Sophia, I’d recommend [resource1] and [resource2].",
            "timestamp": "2024-11-22T11:50:00Z",
            "replies": []
          },
          {
            "id": 20,
            "author": "Alex Johnson",
            "text": "Sophia, you might find [resource3] useful too.",
            "timestamp": "2024-11-22T11:55:00Z",
            "replies": []
          }
        ]
      }
    ]

const DisplayComment = ({ data }) => {
  const { author, text, replies, type } = data;

  // Determine type-specific styles or indicators
  const getTypeStyle = (type) => {
    switch (type) {
      case "admin":
        return "text-blue-500 font-bold"; // Admin comments
      case "moderator":
        return "text-green-500 font-semibold"; // Moderator comments
      case "user":
      default:
        return "text-gray-800"; // Regular user comments
    }
  };

  return (
    <div id="eachComment" className="mb-6">
      {/* Author and Avatar */}
      <div className="flex items-center gap-3">
        <img
          src={accountIcone}
          alt={`${author}'s profile`}
          className="w-10 h-10 rounded-full"
        />
        <span
          id="userName"
          className={`font-semibold ${getTypeStyle(type)}`}
        >
          {author} {type === "admin" && <span className="text-xs">(Admin)</span>}
          {type === "moderator" && (
            <span className="text-xs text-green-500">(Moderator)</span>
          )}
        </span>
      </div>

      {/* Comment Text */}
      <div
        id="message"
        className="pl-12 border-l-2 border-red-500 mt-2 text-gray-600"
      >
        {text}
      </div>

      {/* Replies */}
      <div className="pl-12 mt-4">
        {replies.length > 0 &&
          replies.map((reply) => (
            <DisplayComment key={reply.id} data={reply} />
          ))}
      </div>
    </div>
  );
};

const CommentList = ({ data }) => {
  return (
    <div id="display" className="space-y-6">
      {data.map((each) => (
        <DisplayComment key={each.id} data={each} />
      ))}
    </div>
  );
};

function Comment() {
 
  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-lg font-bold text-gray-800 mb-6">Comments</h1>
      <CommentList data={commentData} />
    </div>
  );
}

export default Comment;
