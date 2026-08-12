function BGChangeButton({ color="olive", onClick=() => {}}) {
  return (
    <button className={`bg-${color}-500 px-4 py-3 text-white hover:bg-${color}-400 rounded-3xl`} onClick={onClick}>
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  )
}

export default BGChangeButton