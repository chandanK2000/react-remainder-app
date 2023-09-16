const express = require('express');
const app = express();

// Serve images from the "images" directory
app.use('/images', express.static('images'));

const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your React app's URL
};

app.use(cors(corsOptions));

// Define your API endpoint
app.get('/api/birthdays', (req, res) => {
  const birthdays = [
    {
      name: "John Doe",
      birthday: "1990-09-16",
      image: "/images/boy1.jpg"
    },
    {
      name: "Jane Smith",
      birthday: "1985-09-25",
      image: "/images/girl2.jpg"
    },
    {
      name: "sumit ",
      birthday: "1923-010-25",
      image: "/images/boy3.jpg"
    },
  ];

  res.json(birthdays);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
