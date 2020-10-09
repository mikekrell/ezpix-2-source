import { useState, useRef, useEffect } from 'react'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import uuid from 'react-uuid'
import Modal from '../components/Modal'




export default function Home() {
  const [spid, setSpid] = useState(false)
  const [thumbnails, setThumbnails] = useState([])
  const [loading, setLoading] = useState(false)
  const files = []
  const firstName = useRef(null);
  const lastName = useRef(null);
  const grade = useRef(null);
  const fileInput = useRef(null);
  const formRef = useRef(null);
  const campaignName = useRef(null);

  useEffect(()=>{
    const params = getQueryParams()
    setSpid(params);
  }, [])


  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    var formData = new FormData();
    formData.append('first_name', firstName.current)
    formData.append('last_name', lastName.current)
    formData.append('grade', grade.current)
    formData.append('campai', campaignName.current)
    for (var a = 0; a < thumbnails.length; a++) {
      formData.append('files', thumbnails[a], thumbnails[a].name)
    }
    const mappedThumbs = Object.assign([], thumbnails)
    //mappedThumbs.map(item => delete item.thumb)

    formData.append('fileMeta', JSON.stringify(mappedThumbs))

    var xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function (e) {
      if (e.lengthComputable) {
        console.log(parseInt(e.loaded / e.total) * 100) // Fallback for unsupported browsers.
      }
    }

    xhr.addEventListener("load", (e) => {
      if (e.currentTarget.status == 200) {
        setThumbnails([])
        setLoading(false)
      }
    });
    // Add any event handlers here...
    xhr.open('POST', '/api/upload', true);
    xhr.send(formData);
    return false;
  }


  const onChange = (e) => {
    setLoading(true)
    let files = []
    let length = e.target.files.length;
    for (var a = 0; a < e.target.files.length; a++) {
      let file = e.target.files[a];
      generateThumbnail(file, [300, 300]).then((data) => {
        file.thumb = data
        file.id = uuid()
        file.caption = ""
        file.tags = [];
        files.push(file)
      }).then(() => {
        if (files.length == length) {
          const thumbs = thumbnails.concat(files)
          setThumbnails(thumbs)
          setLoading(false)
        }
      })
    }
  }

  const clearThumbs = () => {
    setThumbnails([])
  }

  const removeThumb = (thumbId) => {
    var fileList = [...thumbnails];
    if (fileList.length == 1) {
      setThumbnails([])
    }
    var removedFileList = fileList.filter((item) => item.id !== thumbId)
    setThumbnails(removedFileList)
  }

  // }

  const generateThumbnail = (file, boundBox) => {
    if (!boundBox || boundBox.length != 2) {
      throw "You need to give the boundBox"
    }
    var scaleRatio = Math.min(...boundBox) / Math.max(file.width, file.height)
    var reader = new FileReader();
    var canvas = document.createElement("canvas")
    var ctx = canvas.getContext('2d');

    return new Promise((resolve, reject) => {
      reader.onload = function (event) {
        var img = new Image();
        img.onload = function () {
          var scaleRatio = Math.min(...boundBox) / Math.max(img.width, img.height)
          let w = img.width * scaleRatio
          let h = img.height * scaleRatio
          canvas.width = w;
          canvas.height = h;
          ctx.drawImage(img, 0, 0, w, h);
          return resolve(canvas.toDataURL(file.type))
        }
        img.src = event.target.result;
      }
      reader.readAsDataURL(file);
    })
  }

  const captionHandler = (thumbId, e) => {
    let file = thumbnails.filter((file) => file.id == thumbId)
    let caption = e.target.value;
    file[0].caption = caption
    const fileIndex = thumbnails.map((item) => item.id).indexOf(thumbId);
    let thumbs = Object.assign([], thumbnails)
    thumbs[fileIndex] = file[0];
    setThumbnails(thumbs)
  }

  const getQueryParams = () => {

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      return !!params.get("spid")
    }
  }

  return (<>
    <div className="columns is-fullwidth" style={{ "height": "100vh" }}>
      <div className="column has-background-light" style={{ "padding": "25px" }}>
        <div className="container">
          <TransitionGroup className="columns is-multiline p-5">
            {thumbnails.length > 0 ? thumbnails.map((thumb, i) => (
              <CSSTransition
                key={thumb.id}
                timeout={500}
                classNames="column">
                <div className="column is-one-quarter-desktop is-one-half-mobile is-one-third-tablet m-5" key={thumb.id}>
                  <div className="card">
                    <button onClick={() => { removeThumb(thumb.id) }} className="delete delete-btn  is-pulled-right mt-3 mr-2" style={{ "zIndex": "3" }} />
                    <div className="card-image">
                      <figure className="image">
                        <img src={thumb.thumb} alt="Placeholder image" width="auto" height="200" />
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <textarea onChange={(e) => captionHandler(thumb.id, e)} className="textarea" placeholder="Caption (optional)" rows="1"></textarea>
                    </footer>
                  </div>
                </div>
              </CSSTransition>
            )) : null}
          </TransitionGroup>
        </div>
      </div>
      
      <div className="column is-one-quarter pl-5">
        <div className="container">
          <div className="column is-fullwidth mt-5">
            <img src="2020 EZPix_Logo.png" width="180"></img>
          </div>
          
          <div className="column is-fullwidth mt-5">
            <p className="title is-4">Justin Curry Demo High</p>
            <p className="sub-title is-5 mt-0 pt-0">(Yearbook Project #: 12345)</p>
          </div>
          <div className="column is-fullwidth">
            <form ref={formRef} onSubmit={onSubmit}>
              <div className="file is-success ">
                <label className="file-label">
                  <input ref={fileInput} multiple className="file-input" type="file" name="file" accept="image/png, image/jpeg" onChange={onChange} />
                  <span className="file-cta">
                    <span>
                      <FontAwesomeIcon icon={faImage}/>
                    </span>
                    <span className="file-label ml-2">
                      Select Photos to Upload
                  </span>
                  </span>
                </label>
              </div>

              <fieldset className="mt-5">
                <legend className="label">Student Info</legend>
                <div className="field">
                <label >First Name</label>
                <div className="control">
                  <input ref={firstName} className="input" type="text" />
                </div>
              </div>
                <div className="field">
                  <label >Last Name</label>
                  <div className="control">
                    <input ref={lastName} className="input" type="text" />
                  </div>
                </div>
                <div className="field mb-3 " >
                  <label >Grade</label>
                  <div className="control">
                    <div className="select">
                      <select defaultValue="10">
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                      </select>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="mt-5">
              <legend className="label">Campaign Info</legend>
                <div className="field" >
                <label>Title</label>
                <div className="control">
                  <input ref={campaignName} className="input"  type="text" />
                </div>
              </div>
              </fieldset>
              <div className="field is-grouped mt-5 ">
                <div className="control">
                  {
                    loading
                      ? <button disabled={loading} className="button is-link">Loading...</button>
                      : <button disabled={thumbnails.length == 0} className="button is-link">Submit</button>
                  }

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Modal isOpen={!spid}></Modal>
  </>
  )
}
