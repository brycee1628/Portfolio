

function Tag({ children, thisTag, index, handleTag }) {
    return (
        <div className={`Tag ${thisTag === index ? 'TagFocus' : ''}`} onClick={() => handleTag(index)}>
            {children}
        </div>
    );
}

export default Tag;