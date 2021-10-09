import React, {useEffect, useState} from 'react';
import "../../styles/slider/ImageSlider.css"
import {Card, Modal} from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

const ImageSlider = ({ url, height }) => {
    const [index, setIndex] = useState(0)
    const [visible, setVisible] = useState(false)
    const [modalContent, setModalContent] = useState(undefined)

    useEffect(() => {
        setIndex(0)
    }, [url])

    const onPrevButtonPressed = () => {
        if(index - 1 >= 0) {
            setIndex(index - 1)
        }
    }

    const onNextButtonPressed = () => {
        if(index + 1 < url.length) {
            setIndex(index + 1)
        }
    }



    return (
        <>
            <Modal
                title="이미지 뷰어"
                centered
                visible={visible}
                okButtonProps={{ hidden: true }}
                onCancel={() => setVisible(false)}
                width="80%">
                <div style={{ overflow: "scroll", height: "80vh" }}>
                    <img src={modalContent} alt="Zoom" />
                </div>
            </Modal>
            <Card>
                <div className="imageslider" style={{ height: height }}>
                    <a href="#" onClick={onPrevButtonPressed}>
                        <div id="prev-button">
                            <LeftOutlined style={{ fontSize: 24 }} />
                        </div>
                    </a>

                    <div id="prev-image" >
                        {
                            (index - 1 >= 0) && (
                                <img src={url[index-1]} alt="Slider" />
                            )
                        }
                    </div>

                    <div id="curr-image" onClick={() => {
                        setVisible(true)
                        setModalContent(url[index])
                    }}>
                        <img src={url[index]} alt="Slider"/>
                    </div>

                    <div id="next-image">
                        {
                            (index + 1 < url.length) && (
                                <img src={url[index+1]} alt="Slider" />
                            )
                        }
                    </div>
                    <a href="#" onClick={onNextButtonPressed}>
                        <div id="next-button">
                            <RightOutlined style={{ fontSize: 24 }}/>
                        </div>
                    </a>
                </div>
            </Card>
        </>
    );
};

export default ImageSlider;