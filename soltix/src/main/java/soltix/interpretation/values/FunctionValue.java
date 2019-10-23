/*
 * SOLTIX - Scalable automated framework for testing Solidity compilers.
 *
 * Author: Nils Weller <nweller@uni-bremen.de>
 *
 * Copyright (C) 2019 Secure, Reliable, and Intelligent Systems Lab, ETH Zurich
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package soltix.interpretation.values;

import soltix.ast.ASTContractDefinition;
import soltix.ast.ASTFunctionDefinition;
import soltix.ast.ASTLiteral;
import soltix.ast.ASTNode;
import soltix.interpretation.TypeContainer;
import soltix.util.Util;

import java.util.ArrayList;

import static soltix.ast.ASTLiteral.LiteralType.LITERAL_TYPE_BOOL;

public class FunctionValue extends Value {
    private ASTNode type;
    private ASTContractDefinition contractDefinition;
    private ASTFunctionDefinition functionDefinition;

    public FunctionValue(ASTContractDefinition contractDefinition, ASTFunctionDefinition functionDefinition, ASTNode type) {
        this.type = type;
        this.contractDefinition = contractDefinition;
        this.functionDefinition = functionDefinition;
    }

    public ASTFunctionDefinition getFunctionDefinition() {
        return functionDefinition;
    }

    @Override
    public ASTNode getType() { return type; }

    @Override
    public ASTNode toASTNode(boolean forJavaScript) throws Exception {
        Util.unimpl();
        return null;
    }

    @Override
    public Object toJSONRepresentation() {
        Util.unimpl();
        return null;
    }
}