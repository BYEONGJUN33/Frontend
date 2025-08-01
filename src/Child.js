const Child = () => {
    const changeName = (e) => {
        console.log("사용자입력값:", e.target.value)
        onformdata(e.target.value)
    }

    return <input type="text" onChange={() =>{}}/>;
}

export default Child;