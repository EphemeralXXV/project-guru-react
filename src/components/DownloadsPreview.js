import Styles from './DownloadsPreview.module.scss';

const DownloadsPreview = (props) => {
    return (
        <div className = {Styles.downloadsPreview}>
            <h1 className = {Styles.head}>
                {props.name}
            </h1>
            <img className = {Styles.thumbnail} src = {props.thumbnail} alt = {props.name} />
            <p className = {Styles.description}>
                {props.description}
            </p>
            <hr />
            <p>Author: {props.author}</p>
            <p>Downloads: 999</p>
            <p>Rating: 10/10</p>
        </div>
    );
}

export default DownloadsPreview;