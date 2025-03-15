const Cursor = ({ cursorRef, cursorDotRef }) => {
  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block"></div>
      <div ref={cursorDotRef} className="cursor-dot hidden md:block"></div>
    </>
  )
}

export default Cursor

