1. コンポーネントの分類
   コンポーネントを「アトミックデザイン」の考え方に基づいて、atoms（原子）、molecules（分子）、organisms（生物）、templates、pages などのカテゴリーに分けます。これにより、再利用性を高め、コンポーネントの理解を容易にします。

Atoms: 最も基本的な UI 要素（ボタン、インプットなど）
Molecules: atoms を組み合わせて作られるより複合的な UI 要素（フォームグループ、リストアイテムなど）
Organisms: 複数の molecules や atoms を組み合わせた、より複雑な UI セクション（ヘッダー、フッターなど）
Templates: ページのレイアウトを定義するフレーム。organisms や molecules、atoms を配置するプレースホルダーを提供
Pages: 実際のコンテンツを含むテンプレートの具体例。状態や API からのデータを組み込むレベル
