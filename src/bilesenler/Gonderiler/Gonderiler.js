import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegenFnProp, gonderilerProp } = props;

  return (
    <div className="posts-container-wrapper">
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
      {gonderilerProp.map((postData) => {
        console.log(gonderi);
        return (
          <Gonderi key={postData.id} gonderi={postData} gonderiyiBegen={gonderiyiBegenFnProp}/>
        );
      })}
    </div>
  );
};

export default Gonderiler;
