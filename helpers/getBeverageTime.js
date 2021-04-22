/*
[
	{ "type": "tea",      "brew_time": 3, "profit": 2 },
	{ "type": "latte",    "brew_time": 4, "profit": 3 },
	{ "type": "affogato", "brew_time": 7, "profit": 5 }
]
*/

const get = (type) => {
  if (type === 'tea') return 3;
  if (type === 'latte') return 4;
  if (type === 'affogato') return 7;
};

exports.get = get;
