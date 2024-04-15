import React, { useRef, MouseEvent } from 'react';

function PointMarkerOnImage() {
  // 画像要素を参照するためのrefを用意します。
  const imageRef = useRef<HTMLImageElement>(null);

  // 画像がクリックされたときに呼び出される関数
  const handleImageClick = (event: MouseEvent<HTMLImageElement>) => {
    // 画像要素を取得
    const imageElement = imageRef.current;

    if (imageElement) {
      // 画像要素のバウンディングボックスを取得
      const rect = imageElement.getBoundingClientRect();

      // クリック地点の座標を計算
      const x = event.clientX - rect.left; // 左側からの距離
      const y = event.clientY - rect.top; // 上側からの距離

      // 座標をコンソールに表示（または他の処理）
      console.log(`Clicked at image coordinates: (${x}, ${y})`);
    }
  };

  // 座標をconst変数として管理します
  const coordinates = [
    { x: 0, y: 0 },
    { x: 200, y: 200 },
    { x: 300, y: 300 },
    { x: 400, y: 400 },
  ];
    // CSSスタイルをJavaScriptのオブジェクトとして定義します
  const styles = {
    container: {
      position: 'relative', // コンテナの位置を相対的に設定します
    },
    image: {
      width: '100%', // 画像の幅を調整します
      height: 'auto', // 画像の高さを自動で調整します
    },
    marker: {
      position: 'absolute', // マーカーを絶対位置に設定します
      width: '8px', // マーカーの直径を8pxに設定します
      height: '8px', // マーカーの直径を8pxに設定します
      backgroundColor: 'red', // マーカーの色を赤に設定します
      borderRadius: '50%', // マーカーを円形にします
    },
  };

  return (
    <>
      <h1>test</h1>
      <div
        style={{
          padding: '10px', // 内側の余白
          backgroundColor: '#83ccd2', // 背景色を追加
        }}
      >
        <div className="container">
        <img
            ref={imageRef}
            src="/png2.png" // `public`フォルダ内の画像パスを指定
            onClick={handleImageClick} // クリックイベントのリスナーを設定
            alt="Clickable Image"
            style={{
              width: '500px', // 画像の幅を指定
              height: 'auto', // 自動で高さを設定
              border: '2px solid black', // 黒色の枠線
              backgroundColor: '#f0f0f0', // 背景色を追加
            }}
          />

          {/* マーカーを座標に基づいて配置します */}
          {coordinates.map((coordinate, index) => (
            <div
              key={index}
              className="marker"
              style={{ top: `${coordinate.y}px`, left: `${coordinate.x}px` }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PointMarkerOnImage;
