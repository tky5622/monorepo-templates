// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

//必要なライブラリをインポート
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RoboPunksNFT is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;

//ミント時のプライスや最大供給量をデプロイと共に定義
    constructor() payable ERC721("RoboPunksNFT", "RP") { //ERC721に名前とシンボルを渡してあげる
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
        //set withdraw wallet address
    }

　　　　　　　　//この変数がtrueでなければmintできないようにする（etherscanから操作できます）
    function setIsPublicMintEnable(bool isPublicMintEnabled_) external onlyOwner {
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    //NFTのメタデータが読み込まれるベースURL（このURL以下にjsonファイルが置かれます）
    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
    }

    //それぞれのNFTのメタデータが入ったjsonファイルをtoken_idごとに返す
    function tokenURI(uint256 tokenId_) public view override returns (string memory) {
        require(_exists(tokenId_), "Token does not exist");
        //solidityでの文字列の連結はabi.encodePackedを使う
        return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), ".json"));
    }

    //ETHを引き出すときの関数
    function withdraw() external onlyOwner {
        (bool success,) = withdrawWallet.call{ value: address(this).balance }("");
        require(success, "withdraw failed");
    }

    //NFTをMint
    function mint(uint256 quantity_) public payable {
        //mintできるようにトグルがオンになっているかチェック
        require(isPublicMintEnabled, "minting not enabled");

　　　　　　　　　　　　　　　　//mintしようとしているウォレットの送金額はmintPriceと同じか
        require(msg.value == quantity_ * mintPrice, "wrong mint value");

　　　　　　　　　　　　　　　　//最大供給量に達していないか（売り切れていないか）
        require(totalSupply + quantity_ <= maxSupply, "sold out");

        //既にウォレットにあるこのNFT量が、一つのウォレットにもてる量（maxPerWallet）を超えていないか
        require(walletMints[msg.sender] + quantity_ <= maxPerWallet, "exceed max wallet");

　　　　　　　　　　　　　　　//新しいtoken_idを現在の供給量（totalSupply）に1を足して生成
       //_safeMint関数でMintする
        for (uint256 i  = 0; i < quantity_; i++) {
            uint newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }

   }
}
