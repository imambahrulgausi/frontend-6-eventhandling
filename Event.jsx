import React, { useState } from "react";

const Event = () => {
    const [name, setName] = useState('');
    const [selectOption, setSelectOption] = useState('S1 Teknik Informatika');
    const [alamat, setAlamat] = useState('');
    const [gender, setGender] = useState('Pria');
    const [chAkademik, setChAkademik] = useState(false);
    const [chNonAkademik, setChNonAkademik] = useState(false);

    function handleGenderChange(event) {
        setGender(event.target.value);
    }

    function handleOpntionChange(event) {
        setSelectOption(event.target.value);
    }

    function handleNAmeChange(event) {
        setName(event.target.value);
    }

    function handleAlamatChange(event) {
        setAlamat(event.target.value);
    }

    function handleClick() {
        alert('Tombol ini diklik')
    }
    return ( 
        <div className="container mt-4 ml-4 relative">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleClick}
            >
                    Klik Saya!
                </button>
                <div className="mt-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Nama:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tigh focus:outline-none focus:shadow-outline"
                        placeholder="Masukkan data anda"
                        value={name}
                        onChange={handleNAmeChange}
                    />
                    <p className="text-gray-600 text-xs italic mt-2">Nama Anda : {name}</p>
                    <div className="mt-4">
                        <label htmlFor="alamat" className="block text-gray-700 font-bold mb-2">
                            Alamat:
                        </label>
                        <input
                            type="text"
                            id="alamat"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tigh focus:outline-none focus:shadow-outline"
                            placeholder="Masukkan data anda"
                            value={alamat}
                            onChange={handleAlamatChange}
                        />
                        <p className="text-gray-600 text-xs italic mt-2">Alamat Anda</p>

                        <div className="mt-8">
                            <label htmlFor="program-studi" className="block text-gray-700 font-bold mb-2">
                                Program Studi:
                            </label>
                            <select
                                id="program-studi"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tigh focus:outline-none focus:shadow-outline"
                                value={selectOption}
                                onChange={handleOpntionChange}
                            >
                                <option value="S1 Teknik Informatika">S1 Teknik Informatika</option>
                                <option value="S1 Sistem Informatika">S1 Sistem Informatika</option>
                                <option value="D3 Manajemen Informatika">S1 Teknik Informatika</option>
                            </select>
                            <p className="text-gray-600 text-xs italic mt-2">Prodi : {selectOption}</p>
                            <div className="mt-8">
                                <span className="block text-gray-700 font-bold mb-2">Gender:</span>
                                <div className="flex flex-row items-center">
                                    <label className="inline-flex items-center mr-6">
                                        <input
                                            type="radio"
                                            className="form-radio text-indigo-600"
                                            name="gender"
                                            value="Pria"
                                            checked={gender == 'Pria'}
                                            onChange={handleGenderChange}
                                        />
                                        <span className="ml-2">Pria</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio text-indigo-600"
                                            name="gender"
                                            value="Wanita"
                                            checked={gender == 'Wanita'}
                                            onChange={handleGenderChange}
                                        />
                                        <span className="ml-2">Wanita</span>
                                    </label>
                                </div>
                                <p className="text-gray-600 text-xs italic mt-2">Gender : {gender}</p>
                                <div className="mt-4">
                                    <label htmlFor="chAkademik" className="block text-sm font-medium">Prestasi</label>
                                    <div className="mt-2">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox"
                                                checked={chAkademik}
                                                onChange={(e) => setChAkademik(e.target.checked)}
                                            />
                                            <span className="ml-2">Prestasi Akademik</span>
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <label className="inline-flex items-centter">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox"
                                                checked={chNonAkademik}
                                                onChange={(e) => setChNonAkademik(e.target.checked)}
                                            />
                                            <span className="ml-2">Prestasi Non Akademik</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 mt-4 mr-4 bg-white shadow-lg rounded-lg p-4">
                    <h3 className="text-2xl font-semibold">Resume</h3>
                    <hr className="my-2"/>
                    <h5 className="mb-2">Nama: {name}</h5>
                    <h5 className="mb-2">Alamat: {alamat}</h5>
                    <h5 className="mb-2">Gender: {gender}</h5>
                    <h5 className="mb-2">Program Studi: {selectOption}</h5>
                    <h5 className="mb-2">Prestasi Akademik: {chAkademik ? "Ada" : "-"}</h5>
                    <h5 className="mb-2">Prestasi Non Akademik: {chNonAkademik ? "Ada" : "-"}</h5>
                    <hr/>
                </div>
            </div>
    );
}
 
export default Event;