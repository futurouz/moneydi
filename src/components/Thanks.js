import React from 'react';
import Form from './Form';

const Thanks = () => {
    return (
        <Form>
            <div className="thankyou">
                <div className="row">
                    <div className="col-md-10 offset-md-1 text-center">
                        <p>ขอบคุณสำหรับเวลาและความสนใจ มันนี่ดิได้รับใบสมัครจากคุณเป็นที่เรียบร้อยแล้ว
                            โปรดรอรับ SMS แจ้งผลใน 24 ชั่วโมง</p>
                    </div>
                </div>
            </div>
        </Form>
    )
};

export default Thanks;