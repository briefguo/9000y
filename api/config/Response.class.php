<?php
class Response{
    /*
    * 封通信接口数据
    * @param integer $code 状态码
    * @param string $message 状态信息
    * @param array $data 数据
    * return string
    */
    public static function api_response($code, $message='',
            $data=array()){
        $type = isset($_REQUEST['format'])?$_REQUEST['format']:'';
        switch ($type) {
            case 'json':
                self::response_json($code, $message, $data);
                break;
            case 'xml':
                self::response_xml($code, $message, $data);
                break;
            case 'array':
                echo var_dump(self::grant_array($code, $message, $data));
                break;
            default:
                self::response_json($code, $message, $data);
                break;
        }
    }

    /*
    * 封装数为为json数据类型
    * @param integer $code 状态码
    * @param string $message 状态信息
    * @param array $data 数据
    * return string
    */
    public static function json_response($code,
        $message='', $data=array()){
        $result = self::grant_array($code, $message, $data);
        echo json_encode($result);
        exit;
    }

    /*
    * 封装数为为xml数据类型
    * @param integer $code 状态码
    * @param string $message 状态信息
    * @param array $data 数据
    * return string
    */
    public static function xml_response($code,
        $message='', $data=array()){

        $result = self::grant_array($code, $message, $data);

        header("Content-Type:text/xml");
        $xml = "<?xml version='1.0' encoding='UTF-8'?>\n";
        $xml .= "<root>\n";
        $xml .= self::xml_encode($result);
        $xml .= "</root>";
        echo $xml;
        exit();
    }

    /*
    * 将数组转换为XML格式
    * @param array $array 数组
    * return string
    */
    private function xml_encode($array=array()){
        $xml = $attr = "";

        if(!empty($array)){
            foreach ($array as $key => $value) {
                if(is_numeric($key)){
                    $attr = " id='{$key}'";
                    $key = "item";
                }
                $xml .= "<{$key}{$attr}>" ;
                $xml .= is_array($value) ? self::xml_encode($value) : $value;
                $xml .="</{$key}>\n";
            }
        }
        return $xml;
    }

    /*
    * 按照接口格式生成原数据数组
    * @param integer $code 状态码
    * @param string $message 状态信息
    * @param array $data 数据
    * return array
    */
    private function grant_array($code, $message='', $data=array()){
        if(!is_numeric($code)){
            return '';
        }

        $result = array(
            'code' => $code,
            'message' => $message,
            'data' => $data
        );

        return $result;
    }
}
