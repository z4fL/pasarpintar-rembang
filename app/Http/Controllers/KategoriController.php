<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class KategoriController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    //
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $data = [
      'namaKategori' => 'required|max:20',
      'idToko' => 'required',
      'slug' => 'max:20',
    ];
    $validatedData = $request->validate($data);

    $data = Kategori::create($validatedData);
    return redirect()->to('/list-produk')->with('message', 'Berhasil di tambah');
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Kategori  $kategori
   * @return \Illuminate\Http\Response
   */
  public function show(Kategori $kategori)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Kategori  $kategori
   * @return \Illuminate\Http\Response
   */
  public function edit(Kategori $kategori)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Kategori  $kategori
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Kategori $kategori, $id)
  {
    $kategori = Kategori::find($id);

    $data = [
      'namaKategori' => 'required|max:255',
      'slug' => 'max:255',
      'idToko' => 'required',
    ];

    $data['slug'] = Str::slug($request->namaKategori);
    $validatedData = $request->validate($data);
    $kategori->update($validatedData);
    return back()->with('message', 'Kategori sudah berhasil diupdate');
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Kategori  $kategori
   * @return \Illuminate\Http\Response
   */
  public function destroy(Kategori $kategori, $id)
  {
    $data = Kategori::find($id);
    $data->delete();
    return back()->with('message', 'Kategori toko berhasil dihapus');
  }
}
