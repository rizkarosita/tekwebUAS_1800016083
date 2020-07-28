<?php namespace App\Models;
 
use CodeIgniter\Model;
 
class tamuModel extends Model
{
    protected $table = 'user';
    protected $primaryKey = 'userID';
    protected $allowedFields = ['namadepan','namabelakang','alamat','namabuku','nomorhp'];

    public function tambahData($data) {
    	return $this->db->table($this->table)->insert($data);
    }

    public function ubahData($data, $id) {
    	return $this->db->table($this->table)->update($data);
    }

    public function hapusData($id) {
    	return $this->db->table($this->table)->delete($data);
    }
}