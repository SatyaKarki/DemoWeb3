// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MessageBoard {
    string private message;

    event MessageUpdated(
        address indexed updatedBy,
        string newMessage
    );

    constructor() {
        message = "Hello Ethereum";
    }

    function getMessage()
        external
        view
        returns (string memory)
    {
        return message;
    }

    function setMessage(
        string calldata newMessage
    ) external {
        message = newMessage;

        emit MessageUpdated(
            msg.sender,
            newMessage
        );
    }
}