

  import React, { useState, useEffect } from 'react';

const AIAssistant = ({ onAddTask }) => {
  const [input, setInput] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [selectedPriority, setSelectedPriority] = useState('2');
  const [activeCategory, setActiveCategory] = useState('all'); // New state for category filtering

  // Priority categories configuration
  const priorityCategories = {
    '1': { name: 'Urgent', emoji: '🔴', color: '#ff4444', class: 'priority-urgent' },
    '2': { name: 'Normal', emoji: '🟢', color: '#4285f4', class: 'priority-normal' },
    '3': { name: 'Low', emoji: '🟡', color: '#ffbb33', class: 'priority-low' },
    '4': { name: 'Backlog', emoji: '⚪', color: '#aaaaaa', class: 'priority-backlog' }
  };

  // Check browser speech recognition support
  useEffect(() => {
    setSpeechSupported('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
  }, []);

  // Speech recognition handler (same as before)
  const handleSpeechRecognition = () => {
    // ... (previous speech recognition implementation)
  };

  // Detect priority from text
  const detectPriorityFromText = (text) => {
    const lowerText = text.toLowerCase();
    if (/\b(urgent|high|critical|asap|important|priority 1|p1)\b/.test(lowerText)) {
      setSelectedPriority('1');
    } else if (/\b(low|minor|optional|priority 3|p3)\b/.test(lowerText)) {
      setSelectedPriority('3');
    } else if (/\b(very low|trivial|lowest|priority 4|p4)\b/.test(lowerText)) {
      setSelectedPriority('4');
    }
  };

  // Enhanced task generation with categories
  const generateTask = () => {
    try {
      setError(null);
      
      if (!input.trim()) {
        throw new Error('Please enter a task description');
      }

      const category = priorityCategories[selectedPriority] || priorityCategories['2'];

      // Date detection
      let dueDate = '';
      const dateRegex = /(\d{4}-\d{2}-\d{2})|(\d{1,2}\/\d{1,2}\/\d{4})|(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* \d{1,2},? \d{4}/i;
      const dateMatch = input.match(dateRegex);
      if (dateMatch) {
        dueDate = new Date(dateMatch[0]).toISOString().split('T')[0];
      }

      // Clean title generation
      const title = input
        .replace(dateRegex, '')
        .replace(/\b(urgent|high|low|very low|normal|critical|minor|trivial|asap|priority\s*[1-4]|p[1-4])\b/gi, '')
        .replace(/\s{2,}/g, ' ')
        .trim()
        .substring(0, 50) || 'New Task';

      // Build description
      let descParts = [];
      if (description) descParts.push(description);
      descParts.push(`${category.emoji} Priority: ${category.name}`);
      if (dueDate) descParts.push(`📅 Due: ${new Date(dueDate).toLocaleDateString()}`);

      return {
        title,
        description: descParts.join('\n\n'),
        dueDate,
        priority: selectedPriority,
        category: category.name,
        categoryClass: category.class,
        isAI: true,
        meta: {
          generatedFrom: input,
          createdAt: new Date().toISOString()
        }
      };
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      try {
        const task = generateTask();
        onAddTask(task);
        setInput('');
        setDescription('');
        setSelectedPriority('2');
      } catch (err) {
        console.error("Task generation failed:", err);
      } finally {
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <div className="ai-assistant">
      <div className="category-tabs">
        <button 
          className={activeCategory === 'all' ? 'active' : ''}
          onClick={() => setActiveCategory('all')}
        >
          All Tasks
        </button>
        {Object.entries(priorityCategories).map(([key, category]) => (
          <button
            key={key}
            className={activeCategory === key ? 'active' : ''}
            onClick={() => setActiveCategory(key)}
            style={{ borderLeft: `3px solid ${category.color}` }}
          >
            {category.emoji} {category.name}
          </button>
        ))}
      </div>

      <div className="ai-header">
        <h3>Create New Task</h3>
        <p>Add to {activeCategory === 'all' ? 'any category' : priorityCategories[activeCategory]?.name}</p>
      </div>

      <form onSubmit={handleSubmit} className="ai-form">
        <div className="input-with-speech">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              detectPriorityFromText(e.target.value);
            }}
            placeholder="Task title..."
            disabled={isLoading}
          />
          {speechSupported && (
            <button 
              type="button" 
              onClick={handleSpeechRecognition}
              className={`mic-btn ${isListening ? 'listening' : ''}`}
              disabled={isLoading}
            >
              {isListening ? '🎤 Listening...' : '🎤'}
            </button>
          )}
        </div>

        <div className="priority-selector">
          <label>Category:</label>
          <div className="priority-options">
            {Object.entries(priorityCategories).map(([key, category]) => (
              <button
                key={key}
                type="button"
                className={`priority-option ${selectedPriority === key ? 'active' : ''}`}
                onClick={() => setSelectedPriority(key)}
                style={{ color: category.color }}
              >
                {category.emoji} {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task details..."
            rows={3}
            disabled={isLoading}
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button
          type="submit"
          className="submit-btn"
          disabled={isLoading || !input.trim()}
        >
          {isLoading ? 'Adding...' : `Add to ${priorityCategories[selectedPriority].name}`}
        </button>
      </form>

      {!speechSupported && (
        <div className="browser-warning">
          <p>Voice input not supported in your browser</p>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;