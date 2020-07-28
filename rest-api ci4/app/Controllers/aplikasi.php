<?php namespace App\Controllers;
 
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\aplikasiModel;
 
class aplikasi extends ResourceController
{
    use ResponseTrait;
    // get all tamu
    public function index()
    {
        $model = new aplikasiModel();
        $data = $model->findAll();
        return $this->respond($data);
    }
 
    // get single tamu
    public function show($id = null)
    {
        $model = new aplikasiModel();
        $data = $model->getWhere(['userID' => $id])->getResult();
        if($data){
            return $this->respond($data);
        }else{
            return $this->failNotFound('No Data Found with id '.$id);
        }
    }
 
    // create a tamu
    public function create()
    {
        $model = new aplikasiModel();
        $data = [
            'namalengkap' => $this->request->getVar('namalengkap'),
            'judulbuku' => $this->request->getVar('judulbuku'),
            'pengembalianbuku' => $this->request->getVar('pengembalianbuku')
        ];
        $model->insert($data);
        $response = [
            'status'   => 201,
            'error'    => null,
            'messages' => [
                'success' => 'Data Saved'
            ]
        ];
        return $this->respondCreated($response);
    }
 
    // update tamu
    public function update($id = 'judulbuku', $data = 'null')
    {
        $model = new aplikasiModel();
        $input = $this->request->getRawInput();
        $data = [
            'namalengkap' => $input['namalengkap'],
            'judulbuku' => $input['judulbuku'],
            'pengembalianbuku' => $input['pengembalianbuku']
        ];
        $model->update($id, $data);
        $response = [
            'status'   => 200,
            'error'    => null,
            'messages' => [
                'success' => 'Data Updated'
            ]
        ];
        return $this->respond($response);
    }
 
    // delete product
    public function delete($id = 'judulbuku')
    {
        $model = new aplikasiModel();
        $data = $model->find($id);
        if($data){
            $model->delete($id);
            $response = [
                'status'   => 200,
                'error'    => null,
                'messages' => [
                    'success' => 'Data Deleted'
                ]
            ];
            return $this->respondDeleted($response);
        }else{
            return $this->failNotFound('No Data Found with id '.$id);
        }
    }
 
}