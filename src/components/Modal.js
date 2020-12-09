import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import styled from 'styled-components';
import Upload from './pages/UploadPage/fileupload';

const Btn = styled.button`
    width: 1000px;
    height: 100px;
    border-radius: 10rem;
    border-color: #262626;
    font-size: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "KoreanJMDBR";
`;

const Section = styled.section`
    display: flex;
    justify-content: center;
`

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <Section>
                {/* <h1>React-Modal Examples</h1> */}
                <Btn onClick={() => this.openModal()}>제출하기</Btn>
                <Modal visible={this.state.visible} width="1100" height="600" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        {/* <h1>Title</h1>
                        <p>Some Contents</p> */}
                        <Upload />
                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                    </div>
                </Modal>
            </Section>
        );
    }
}