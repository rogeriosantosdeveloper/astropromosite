# -*- coding: utf-8 -*-
import os
import sys
from pathlib import Path
from rembg import remove

# Configurar encoding para UTF-8
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# Verificar se um arquivo específico foi passado como argumento
if len(sys.argv) > 1:
    # Processar arquivo específico
    input_file_path = Path(sys.argv[1])
    if not input_file_path.exists():
        print(f"Erro: Arquivo nao encontrado: {input_file_path}")
        sys.exit(1)
    
    try:
        print(f"Processando: {input_file_path.name}...")
        
        # Ler a imagem
        with open(input_file_path, 'rb') as input_file:
            input_data = input_file.read()
        
        # Remover fundo
        output_data = remove(input_data)
        
        # Salvar a imagem sem fundo (manter o mesmo nome)
        with open(input_file_path, 'wb') as output_file:
            output_file.write(output_data)
        
        print(f"Concluido: {input_file_path.name}\n")
        print("Processamento concluido!")
        
    except Exception as e:
        print(f"Erro ao processar {input_file_path.name}: {str(e)}\n")
        sys.exit(1)
    
else:
    # Processar todas as imagens da pasta products (comportamento original)
    input_folder = Path("public/assets/products")
    output_folder = Path("public/assets/products")
    
    # Garantir que a pasta existe
    output_folder.mkdir(parents=True, exist_ok=True)
    
    # Extensões de imagem suportadas
    image_extensions = {'.png', '.jpg', '.jpeg', '.webp'}
    
    print("Iniciando remocao de fundos das imagens...\n")
    
    processed = 0
    skipped = 0
    
    # Processar cada imagem na pasta
    for image_file in input_folder.iterdir():
        if image_file.suffix.lower() in image_extensions:
            try:
                print(f"Processando: {image_file.name}...")
                
                # Ler a imagem
                with open(image_file, 'rb') as input_file:
                    input_data = input_file.read()
                
                # Remover fundo
                output_data = remove(input_data)
                
                # Salvar a imagem sem fundo (manter o mesmo nome)
                output_path = output_folder / image_file.name
                with open(output_path, 'wb') as output_file:
                    output_file.write(output_data)
                
                print(f"Concluido: {image_file.name}\n")
                processed += 1
                
            except Exception as e:
                print(f"Erro ao processar {image_file.name}: {str(e)}\n")
                skipped += 1
    
    print(f"\nProcessamento concluido!")
    print(f"   Processadas: {processed}")
    if skipped > 0:
        print(f"   Ignoradas: {skipped}")
