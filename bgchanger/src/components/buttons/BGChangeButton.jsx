const colorVariants = {
  olive: {
    bg: "bg-olive-500",
    hover: "hover:bg-olive-400",
  },
  red: {
    bg: "bg-red-500",
    hover: "hover:bg-red-400",
  },
  blue: {
    bg: "bg-blue-500",
    hover: "hover:bg-blue-400",
  },
  green: {
    bg: "bg-green-500",
    hover: "hover:bg-green-400",
  },
  yellow: {
    bg: "bg-yellow-500",
    hover: "hover:bg-yellow-400",
  },
  purple: {
    bg: "bg-purple-500",
    hover: "hover:bg-purple-400",
  },
  pink: {
    bg: "bg-pink-500",
    hover: "hover:bg-pink-400",
  },
  orange: {
    bg: "bg-orange-500",
    hover: "hover:bg-orange-400",
  },
  gray: {
    bg: "bg-gray-500",
    hover: "hover:bg-gray-400",
  },
  teal: {
    bg: "bg-teal-500",
    hover: "hover:bg-teal-400",
  },
  indigo: {
    bg: "bg-indigo-500",
    hover: "hover:bg-indigo-400",
  },
};

function BGChangeButton({ color="olive", onClick=() => {}}) {
  const { bg, hover } = colorVariants[color] || colorVariants.olive;

  return (
    <button className={`${bg} ${hover} px-4 py-3 text-white rounded-3xl`} onClick={onClick}>
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  )
}

export default BGChangeButton