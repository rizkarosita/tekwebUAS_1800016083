<?php namespace App\Models;
 
use CodeIgniter\Model;
 
class aplikasiModel extends Model
{
    protected $table = 'aplikasi';
    protected $primaryKey = 'userID';
    protected $allowedFields = ['namalengkap','judulbuku','pengembalianbuku'];

    public function ubahData($data, $id) {
    	return $this->db->table($this->table)->update($data);
    }
    public function hapusData($id) {
    	return $this->db->table($this->table)->delete($data);
    }
}