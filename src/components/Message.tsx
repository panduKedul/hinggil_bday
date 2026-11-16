import { NAME } from '../config'

export default function Message() {
  return (
    <section className="section message" id="pesan">
      <div className="paper reveal">
        <p className="eyebrow">Sebuah pesan</p>
        <h2 className="script">Untukmu, {NAME}</h2>
        <p>
          Ada orang yang hadir dengan suara keras, dan ada yang hadir dengan cara yang membuat hari terasa lebih
          ringan. Kamu yang kedua. Tanpa banyak tuntutan, kamu membuat sekitarmu tenang.
        </p>
        <p>
          Aku melihat kamu menjalani banyak hal dengan kepala tegak. Tidak selalu mudah, dan kamu tidak selalu
          bilang. Tapi kamu tetap jalan, tetap mengurus yang perlu diurus, dan tetap menyisakan senyum untuk orang
          lain. Itu bukan hal kecil. Itu kekuatan yang jarang terlihat tapi sangat nyata.
        </p>
        <p>
          Aku ingin kamu tahu: kamu tidak harus selalu kuat. Ada hari-hari kamu boleh bersandar, dan di hari-hari
          itu aku senang bisa ada. Kamu mandiri bukan karena harus, tapi karena kamu memang mampu. Dan kamu manis
          bukan karena berusaha, tapi karena memang begitu adanya kamu.
        </p>
        <p className="sign">Selamat ulang tahun. Semoga tahun ini memperlakukanmu sebaik kamu memperlakukan dunia.</p>
      </div>
    </section>
  )
}
