/* HTTP GET REQUEST
@ACCESS PUBLIC
@URL /api/students/students

*/

exports.getStudents = (req, res) => {
    let mernstackStudents = [
      {
        name: "vikas",
        id: 1,
        skills: "frontend",
      },
      {
        name: "shashi",
        id: 2,
        skills: "fullstack",
      },
    ];
    res.status(200).json(mernstackStudents);
  res.send("ok")
}